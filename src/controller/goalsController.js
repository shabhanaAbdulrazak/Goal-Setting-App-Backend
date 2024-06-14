const Goal = require('../model/goal');

// Save a new goal sheet
exports.createGoal = (req, res) => {
  const newGoal = new Goal(req.body);
  newGoal.save()
    .then(goal => res.status(201).json(goal))
    .catch(err => res.status(400).json({ error: err.message }));
};

// Submit a goal sheet for approval
exports.submitGoal = (req, res) => {
  Goal.findByIdAndUpdate(req.params.id, { status: 'submitted' }, { new: true })
    .then(goal => res.json(goal))
    .catch(err => res.status(400).json({ error: err.message }));
};

// Fetch all goal sheets for the logged-in employee
exports.getGoals = (req, res) => {
  Goal.find({ employeeId: req.user.id })
    .then(goals => res.json(goals))
    .catch(err => res.status(400).json({ error: err.message }));
};

// Fetch details of a specific goal sheet
exports.getGoal = (req, res) => {
  Goal.findById(req.params.id)
    .then(goal => res.json(goal))
    .catch(err => res.status(400).json({ error: err.message }));
};

// Edit a goal sheet
exports.editGoal = (req, res) => {
  Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(goal => res.json(goal))
    .catch(err => res.status(400).json({ error: err.message }));
};

// Resubmit a corrected goal sheet for approval
exports.resubmitGoal = (req, res) => {
  Goal.findByIdAndUpdate(req.params.id, { status: 'resubmitted' }, { new: true })
    .then(goal => res.json(goal))
    .catch(err => res.status(400).json({ error: err.message }));
};
