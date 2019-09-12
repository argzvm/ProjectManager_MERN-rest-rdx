const projectModel = require('../models/projectModel.js');
const userModel = require('../models/userModel.js');
const notificationModel = require('../models/notificationModel.js');
const keys = require('../config/keys.js');
const jwt = require('jsonwebtoken');


// POST - create a new project - send notification
module.exports.createPostRequest = function(req, res, next) {

    let decoded = jwt.verify(req.body.token, keys.jwtSecret);
    userModel.findOne({_id: decoded.id}).select("-password")
    .then( () => {
        let project = req.body.project;
        project.created =  Date.now();
        project.modified =  Date.now();
        let notification = {};
        notification.title = project.title;
        notification.username = project.username;
        notification.message = "has created a new project";
        notification.created = project.created;
        projectModel(project).save()
        .then( (data) => {
            let tdata = {}; tdata.project = data;
            notificationModel(notification).save()
            .then( (data) => {
                tdata.notification = data;
                res.json(tdata)
            }).catch( (err) => console.error(err) );
        }).catch( (err) => console.error(err) );
    }).catch( (err) => console.error(err, "401 UNAUTHORIZED") );

};

// POST - update an existing project info - send notification
module.exports.updatePostRequest = function(req, res, next) {

    let decoded = jwt.verify(req.body.token, keys.jwtSecret);
    userModel.findOne({_id: decoded.id}).select("-password")
    .then(
        projectModel.findOne({_id: req.body.project.id})
        .then( (data) => {
            let project = {};
            project.content = req.body.project.content;
            project.modified =  Date.now();
            let notification = {};
            notification.title = req.body.project.title;
            notification.username = data.username;
            notification.message = "has updated the project";
            notification.created = project.modified;
            projectModel.findOneAndUpdate({_id: req.body.project.id}, project, {new: true})
            .then( (data) => {
                let tdata = {}; tdata.project = data;
                notificationModel(notification).save()
                .then( (data) => {
                    tdata.notification = data;
                    res.json(tdata)
                }).catch( (err) => console.error(err) );
            }).catch( (err) => console.error(err) );
        })
    ).catch( (err) => console.error(err, "401 UNAUTHORIZED") );

};

// POST - delete an existing project - send notification
module.exports.deletePostRequest = function(req, res, next) {

    let decoded = jwt.verify(req.body.token, keys.jwtSecret);
    userModel.findOne({_id: decoded.id}).select("-password")
    .then( () => {
        projectModel.findOne({_id: req.body.project.id})
        .then( (data) => {
            let notification = {};
            notification.title = data.title;
            notification.username = data.username;
            notification.message = "has deleted the project";
            notification.created = Date.now();
            projectModel.findByIdAndDelete(data._id)
            .then( (data) => {
                let tdata = {}; tdata.project = data;
                notificationModel(notification).save()
                .then( (data) => {
                    tdata.notification = data;
                    res.json(tdata)
                }).catch( (err) => console.error(err) );
            }).catch( (err) => console.error(err) );
        });
    }).catch( (err) => console.error(err, "401 UNAUTHORIZED") );

};
