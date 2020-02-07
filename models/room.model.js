const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: {
    type: String,
    trim: true
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
  }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
