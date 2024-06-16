const express = require('express');
const router = express.Router();
const tasksController = require('../controller/tasksController');

router.put('/task/:id/status', tasksController.updateTaskStatus);
router.put('/task/:id/self-assess', tasksController.selfAssessTask);

module.exports = router;
