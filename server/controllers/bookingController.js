let Booking = require("../models/booking.model");

module.exports.create = async (req, res) => {
  const booking = req.body;

  newBooking = new Booking(booking);

  booked = await Booking.find({
    venueId: req.body.venueId,
    date: req.body.date,
    startTime: req.body.startTime
  });
  if (booked == null || undefined || booked.length < 1) {
    newBooking
      .save()
      .then(() =>
        res.status(200).send({ message: "Venue booked successfully" })
      )
      .catch(err =>
        res
          .status(400)
          .send({ error: err, message: "Booking failed, please try again" })
      );
  } else {
    res.status(403).send("selected time not available");
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
    .then(todos => res.json({ message: "booking has been deleted" }))
    .catch(err =>
      res.status(400).json({ error: err, message: "cannot delete booking" })
    );
};
