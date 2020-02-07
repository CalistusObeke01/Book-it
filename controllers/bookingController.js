let Booking = require("../models/booking.model");

module.exports.create = (req, res) => {
  const booking = req.body;

  newBooking = new Booking(booking);

  newBooking
    .save()
    .then(() =>
      res.status(200).send({ message: "Venue booked successfully" })
    )
    .catch(err =>
      res.status(400).send({ error: err, message: "Booking failed, please try again" })
    );
};

module.exports.getMany = async (req, res) => {
  const bookings = await Booking.find({ spotId: req.params.venueId });
  try {
    if (bookings.length == 0) {
      () =>
        res
          .status(204)
          .json({ message: "No review available for this spot yet" });
    } else {
      () => res.status(200).json({body:bookings});
    }
  } catch (err) {
    console.log(err);
    () => res.status(500).send();
  }
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

