const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  // Define your goal schema here
  title: String,
  description: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'] },
  employeeId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Goal', goalSchema);
