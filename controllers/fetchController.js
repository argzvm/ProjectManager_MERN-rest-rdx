const userModel = require('../models/userModel.js');
const projectModel = require('../models/projectModel.js');
const notificationModel = require('../models/notificationModel.js');


// GET - fetch data in signed out app
module.exports.soutstoredata = function(req, res, next) {
    let storedata = {};
    userModel.find({}).select("-_id -fullname -profile -email -password -created -modified -login")
    .then((data) => {
        storedata.users = data;
        projectModel.find({}).where({private: false}).sort({modified: -1})
        .then( (data) => {
            storedata.projects = data;
            notificationModel.find({}).sort({_id: -1}).limit(5)
            .then( (data) => {
                storedata.notifications = data;
                res.json(storedata);
            }).catch( (err) => console.error(err) );
        }).catch( (err) => console.error(err) );
    }).catch( (err) => console.error(err) );
}

// POST - fetch data in signed in app
module.exports.sinstoredata = function(req, res, next) {
    let storedata = {};
    userModel.find({}).select("-_id -fullname -email -password -modified")
    .then((data) => {
        storedata.users = data;
        projectModel.find({}).where({private: true}).where({username: req.body.username}).sort({modified: -1})
        .then( (data) => {
            storedata.projects = data;
        notificationModel.find({}).sort({_id: -1}).limit(5)
            .then( (data) => {
                storedata.notifications = data;
                res.json(storedata);
            }).catch( (err) => console.error(err) );
        }).catch( (err) => console.error(err) );
    }).catch( (err) => console.error(err) );
}
