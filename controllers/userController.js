const userModel = require('../models/userModel.js');
const notificationModel = require('../models/notificationModel.js');
const bcrypt = require('bcryptjs');
const keys = require('../config/keys.js');
const jwt = require('jsonwebtoken');


// POST - create a new user - send notification
module.exports.signupPostRequest = function(req, res, next) {

    // need to check for exsting username, should be unique
    
    let user = req.body;
    user.created =  Date.now();
    user.modified =  Date.now();
    user.login =  Date.now();
    let notification = {};
    notification.username = user.username;
    notification.message = "has signed up";
    notification.created = user.created;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash( user.password, salt, function(err, hash) {
            if (err) throw err;
            user.password = hash;
            //console.log(user);
            userModel(user).save()
            .then( (data) => {
                let tdata = {}; tdata.user = {};
                tdata.user.username = data.username;
                tdata.user.profile = data.profile;
                tdata.user.created = data.created;
                tdata.user.login = data.login;
                notificationModel(notification).save()
                .then( (data) => {
                    tdata.notification = data;
                    res.json(tdata)
                }).catch( (err) => console.error(err) );
            }).catch( (err) => console.error(err) );
        });
    });
};

// POST - update an existing user info
module.exports.updatePostRequest = function(req, res, next) {
    let user = req.body;
    userModel.findOneAndUpdate({_id: req.body.id}, user, {new: true})
    .then( (data) => res.json(data) )
    .catch( (err) => console.error(err) );
};

// POST - delete an existing user
module.exports.deletePostRequest = function(req, res, next) {
    userModel.findOneAndDelete({_id: req.body.id})
    .then( (data) => res.json(data) )
    .catch( (err) => console.error(err) );
};
