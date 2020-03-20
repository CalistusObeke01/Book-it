let Booking = require("../models/booking.model");
var isDate = require("date-fns/isDate");
var isValid = require("date-fns/isValid");
var isFuture = require("date-fns/isFuture");
var differenceInMilliseconds = require("date-fns/differenceInMilliseconds");
var areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

module.exports.create = async (req, res) => {
  const checkTimeOverlap = (bookingArray, startTime, endTime) => {
    for (i = 0; i < bookingArray.length; i++) {
      if (
        areIntervalsOverlapping(
          { start: bookingArray[i].startTime, end: bookingArray[i].endTime },
          { start: startTime, end: endTime }
        )
      ) {
        return true;
      }
    }
    return false;
  };

  const addBooking = booking => {
    booking
      .save()
      .then(() => {
        res.status(200).send({ message: "Venue booked successfully" });
      })
      .catch(err => {
        console.log(err);
        res.status(400).send({
          error: err,
          message: "Booking failed, please try again"
        });
      });
  };

  const booking = req.body;
  newBooking = new Booking(booking);

  if (
    isDate(new Date(req.body.startTime)) &&
    isDate(new Date(req.body.endTime))
  ) {
    if (
      isValid(new Date(req.body.startTime)) &&
      isValid(new Date(req.body.endTime))
    ) {
      if (
        isFuture(new Date(req.body.startTime)) &&
        isFuture(new Date(req.body.endTime))
      ) {
        if (
          differenceInMilliseconds(
            new Date(req.body.endTime),
            new Date(req.body.startTime)
          ) > 0
        ) {
          booked = await Booking.find({ venueId: req.body.venueId });
          console.log(booked);
          if (booked.length >= 1) {
            console.log({ booked });
            if (
              checkTimeOverlap(
                booked,
                new Date(req.body.startTime),
                new Date(req.body.endTime)
              )
            ) {
              res.status(403).send("selected time not available");
            } else {
              addBooking(newBooking);
            }
          } else {
            addBooking(newBooking);
          }
        } else {
          res.status(401).send("EndTime earlier than StartTime");
        }
      } else {
        res.status(401).send("Bad time format");
      }
    } else {
      res.status(401).send("Bad time format");
    }
  } else {
    res.status(401).send("Bad time format");
  }
};

module.exports.getMany = (req, res) => {
  Booking.find({ venueId: req.params.venueId })
    .then(bookings => {
      if (bookings.length == 0) {
        res.status(204).send("no bookings found");
      } else {
        res.status(200).json({ body: bookings });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports.getOne = (req, res) => {
  Booking.findById(req.params.bookingId)
    .then(booking => res.json({ body: booking }))
    .catch(err =>
      res.status(400).json({ error: err, message: "Cannot find booking " })
    );
};

module.exports.update = (req, res) => {
  const booking = req.body;

  Todo.findByIdAndUpdate({ _id: req.params.bookingId }, booking, { new: true })
    .then(spot =>
      res.json({ body: booking, message: "Booking updated successfully" })
    )
    .catch(err =>
      res.status(400).json({ error: err, message: "cannot update booking" })
    );
};

module.exports.delete = (req, res) => {
  Todo.findOneAndDelete({ _id: req.params.bookingId })
    .then(booking => res.json({ message: "booking has been deleted" }))
    .catch(err =>
      res.status(400).json({ error: err, message: "cannot delete booking" })
    );
};
