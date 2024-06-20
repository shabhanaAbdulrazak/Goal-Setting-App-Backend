const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  conformPassword:String,
});

module.exports = mongoose.model('Dashboard', userSchema);
