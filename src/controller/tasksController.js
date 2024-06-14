const Task = require('../model/Task');

const tasksController = {
  updateTaskStatus: async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
      res.json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  selfAssessTask: async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, { selfAssessment: req.body.selfAssessment }, { new: true });
      res.json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = tasksController;
