const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userController = {
  createUser: async (req, res) => {
    const { firstname, lastname, email, password, confirmPassword ,role} = req.body;

    // const isMatch = await bcrypt.compare(password, confirmPassword);
    console.log("p",password);
    console.log("cp",confirmPassword);
    if (password!==confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    
    try {
      const newUser = new User({firstname, lastname, email, password , role:"employee"});
      console.log("ro",newUser.role);
      // User.setRole("employee");
      console.log("data",newUser);
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select("-password");
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

   getAllUsers :async (req, res) => {
    try {
      const user = await User.find().populate('user_id');
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching user data.' });
    }
  },
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      ).select("-password");
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
      }

      // const isMatch = await bcrypt.compare(password, user.password);
      if (password !== user.password) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        'secretaccesskey',
        {
          expiresIn: "5d",
        }
      );

      res.json({ token, user});
    } catch (err) {
      console.log("err", err);
      res.status(500).json({ error: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = userController;