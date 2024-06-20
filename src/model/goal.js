const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userName:String,
  title: String,
  description: String,
  duration:String,
  selfAssessment: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'] },
  employeeId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Goal', goalSchema);
