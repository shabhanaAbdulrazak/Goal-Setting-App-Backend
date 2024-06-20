const Dashboard = require('../model/dashboard');

const dashboardController = {
  getUserData: async (req, res) => {
    try {
      const user = await Dashboard.findById(req.user.id).select('-password');
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createUserData: async (req, res) => {
    const newDashboard = new Dashboard(req.body);
    try {
      const user = await newDashboard.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  updateUserData: async (req, res) => {
    try {
      const user = await Dashboard.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getUserDataById: async (req, res) => {
    try {
      const user = await Dashboard.findById(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  deleteUserData: async (req, res) => {
    try {
      await Dashboard.findByIdAndDelete(req.params.id);
      res.json({ message: 'Data deleted successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = dashboardController;
