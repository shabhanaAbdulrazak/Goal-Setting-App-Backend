const express = require('express');
const userController = require('../controller/userController');
const authMiddleware = require('../Auth/authMiddleware');
const router = express.Router();

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/user/:id', authMiddleware(['hr', 'manager', 'employee']), userController.getUserById);
router.put('/user/:id', authMiddleware(['hr', 'manager']), userController.updateUser);
router.delete('/user/:id', authMiddleware(['hr']), userController.deleteUser);

module.exports = router;
