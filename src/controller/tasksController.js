const Task = require('../model/task');

// Update task status
exports.updateTaskStatus = (req, res) => {
  Task.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true })
    .then(task => res.json(task))
    .catch(err => res.status(400).json({ error: err.message }));
};

// Submit self-assessment for a task
exports.selfAssessTask = (req, res) => {
  Task.findByIdAndUpdate(req.params.id, { selfAssessment: req.body.selfAssessment }, { new: true })
    .then(task => res.json(task))
    .catch(err => res.status(400).json({ error: err.message }));
};
