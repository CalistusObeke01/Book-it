const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    title: {
        type: String,
        trim: true
    },

    date: {
        type:Date
    },

    startTime: {
        type: Date
    },

    endTime: {
        type: Date
    },

    venue: {
        type: String
    },

    description: {
        type: String
    },

    invites: {
        type: Array
    },

    owner: {
        type: String
    }
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;