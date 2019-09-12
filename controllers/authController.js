const userModel = require('../models/userModel.js');
const notificationModel = require('../models/notificationModel.js');
const bcrypt = require('bcryptjs');
const keys = require('../config/keys.js');
const jwt = require('jsonwebtoken');


// POST - retrieve authenticated user
module.exports.userauthPostRequest = function(req, res, next) {
    //console.log(req.body);
    let decoded = jwt.verify(req.body.token, keys.jwtSecret); //console.log(decoded);
    userModel.findOne({_id: decoded.id}).select("-password")
    .then( (data) => {
        let tdata = {};   tdata.user = data;   tdata.token = req.body.token;
        res.json(tdata);
    } )
    .catch( (err) => console.error(err) );
};

// POST - log in an existing user - send notification
module.exports.loginPostRequest = function(req, res, next) {

    // check if the user actually exists
    //console.log(req.body);
    userModel.findOne({username: req.body.username})
    .then( (user) => {
        //console.log(user);
        if (user) {
            bcrypt.compare(req.body.password, user.password)
            .then( (isMatch) => {
                if (isMatch) {
                    jwt.sign( {id: user._id}, keys.jwtSecret, {expiresIn: 3600},
                        (err, token) => {
                            if (err) throw err;
                            let notification = {};
                            notification.username = user.username;
                            notification.message = "has logged in";
                            notification.created = Date.now();
                            userModel.findOneAndUpdate({_id: user._id}, {login: Date.now()}, {new: true})
                            .then( () => {
                                notificationModel(notification).save()
                                .then(
                                    res.json({
                                        token,
                                        user: { id: user._id, username: user.username, fullname: user.fullname,
                                            email: user.email, created: user.created }
                                    })
                                ).catch( (err) => console.error(err) );
                            }).catch( (err) => console.error(err) );
                        }
                    )
                } else {
                    // invalid creadentials
                    return res.status(401).end();
                }
            }).catch( (err) => console.error(err) );
        } else {
            // user does not exist
            return res.status(400).end();
        }
    }).catch( (err) => console.error(err) );
};

// GET - log out an existing user - send notification
module.exports.logoutPostRequest = function(req, res, next) {
    res.end();

    // delete token, log out with jwt - pending

};
