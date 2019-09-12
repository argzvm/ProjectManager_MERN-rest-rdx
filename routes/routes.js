const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');
const fetchController = require('../controllers/fetchController.js');
const userController = require('../controllers/userController.js');
const projectController = require('../controllers/projectController.js');


// auth routes

// access public - auth user
router.post ('/userauth', authController.userauthPostRequest);
// access public - log in an existing user
router.post ('/users/login', authController.loginPostRequest);
// access public - log out an existing user
router.post ('/users/logout', authController.logoutPostRequest);


// fetching routes 

// access public - auth user
router.get ('/soutstoredata', fetchController.soutstoredata);
// access public - auth user
router.post ('/sinstoredata', fetchController.sinstoredata);


// user routes 

// access public - create a new user
router.post ('/users/signup', userController.signupPostRequest);
// access public - update an existing user info
router.post ('/users/update/', userController.updatePostRequest);
// access public - delete an existing user
router.post ('/users/delete/', userController.deletePostRequest);


// project routes 

// access public - create a new project
router.post ('/projects/create', projectController.createPostRequest);
// access public - update an existing project info
router.post ('/projects/update/', projectController.updatePostRequest);
// access public - delete an existing project
router.post ('/projects/delete/', projectController.deletePostRequest);


module.exports = router;
