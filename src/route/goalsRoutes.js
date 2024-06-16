const express = require('express');
const router = express.Router();
const goalsController = require('../controller/goalsController');

router.post('/createGoals', goalsController.createGoal);
router.post('/:id/submitGoals', goalsController.submitGoal);
router.get('/getGoals', goalsController.getGoals);
router.get('/getGoals/:id', goalsController.getGoal);
router.put('/editGoals/:id', goalsController.editGoal);
router.post('/:id/resubmitGoals', goalsController.resubmitGoal);

module.exports = router;
