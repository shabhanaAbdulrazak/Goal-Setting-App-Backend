const express = require('express');
const router = express.Router();
const dashboardController = require('../controller/dashboardController');

// Route to get logged-in user data
router.get('/user', dashboardController.getUserData);

// Route to create new user data
router.post('/user', dashboardController.createUserData);

// Route to update user data by ID
router.put('/user/:id', dashboardController.updateUserData);

// Route to get user data by ID
router.get('/user/:id', dashboardController.getUserDataById);

// Route to delete user data by ID
router.delete('/user/:id', dashboardController.deleteUserData);

module.exports = router;
