const Goal = require('../model/goal');

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

  updateGoalStatus: async (req, res) => {
    const { employeeId } = req.params;
    const { status } = req.body;
    
    try {
      const updatedGoal = await Goal.findByemployeeIdAndUpdate(employeeId, { status }, { new: true });
      res.json(updatedGoal);
    } catch (error) {
      res.status(400).json({ error: error.message });
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
      const goals = await Goal.find().populate('employeeId');
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
  getGoalbyUser: async (req, res) => {
    try {
      const goal = await Goal.find({userName:req.params.userName});
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
