const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  image: {
    type: String
  },

  admin: {
    type: Boolean
  },

  company: {
    type: String
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
