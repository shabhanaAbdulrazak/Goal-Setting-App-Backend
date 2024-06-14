const Goal = require('../model/Goal');

const goalsController = {
  createGoal: async (req, res) => {
    const newGoal = new Goal(req.body);
    try {
      const goal = await newGoal.save();
      res.status(201).json(goal);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  submitGoal: async (req, res) => {
    try {
      const goal = await Goal.findByIdAndUpdate(req.params.id, { status: 'submitted' }, { new: true });
      res.json(goal);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getGoals: async (req, res) => {
    try {
      const goals = await Goal.find({ employeeId: req.user.id });
      res.json(goals);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getGoal: async (req, res) => {
    try {
      const goal = await Goal.findById(req.params.id);
      res.json(goal);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  editGoal: async (req, res) => {
    try {
      const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(goal);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  resubmitGoal: async (req, res) => {
    try {
      const goal = await Goal.findByIdAndUpdate(req.params.id, { status: 'resubmitted' }, { new: true });
      res.json(goal);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = goalsController;
