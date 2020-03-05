const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  startTime: {
    type: Number,
    required: true
  },

  endTime: {
    type: Number,
    required: true
  },

  venueId: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  userId: {
    type: String,
    required: true
  }
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;