const express = require('express');
const router = express.Router();
const dashboardController = require('../controller/dashboardController');
// const authMiddleware = require('../middlewares/authMiddleware'); // Example middleware for authentication

router.get('/getData', dashboardController.getUserData);
router.post('/createData', dashboardController.createUserData);
router.put('/updateData/:id',  dashboardController.updateUserData);
router.get('/gerGata/:id', dashboardController.getUserDataById);
router.delete('/deleteData/:id',  dashboardController.deleteUserData);

module.exports = router;
