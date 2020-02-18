const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },

  location: {
    type: String
  },

  image: {
    type: String
  },

  seats: {
    type: String
  },

  facilities: {
    type: Array
  },

  company: {
    type: String,
    required: true,
    trim: true

  }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
