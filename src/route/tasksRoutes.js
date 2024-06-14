const express = require('express');
const router = express.Router();
const tasksController = require('../controller/tasksController');

router.put('/:id/status', tasksController.updateTaskStatus);
router.put('/:id/self-assess', tasksController.selfAssessTask);

module.exports = router;
