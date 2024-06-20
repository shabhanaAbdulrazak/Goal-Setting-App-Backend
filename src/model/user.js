const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ['employee', 'hr','manager'],
    default: "employee", // Set default role to 'employee'
  }
});

// Hash the password before saving the user model
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (err) {
//     next(err);
//   }
// });

// Check if the model already exists before defining it
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
