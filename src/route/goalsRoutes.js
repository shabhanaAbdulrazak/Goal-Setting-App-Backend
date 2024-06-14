const express = require('express');
const router = express.Router();
const goalsController = require('../controller/goalsController');

router.post('/create', goalsController.createGoal);
router.post('/:id/submit', goalsController.submitGoal);
router.get('/', goalsController.getGoals);
router.get('/:id', goalsController.getGoal);
router.put('/:id', goalsController.editGoal);
router.post('/:id/resubmit', goalsController.resubmitGoal);

module.exports = router;
