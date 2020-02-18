require("dotenv").config();
var cloudinary = require("cloudinary").v2;
let Room = require("../models/room.model");
var roomImg;

cloudinary.config({
  cloud_name: process.env.cloudinary_cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.cloudinary_api_secret
});

module.exports.upload = (req, res) => {
  if (!req.file) {
    res.status(415).json({ message: "invalid upload request" });
  }
  cloudinary.uploader.upload(
    req.file.path,
    { folder: "Book-!t/rooms",
      use_filename: true,
      unique_filename: true,
      overwrite: false,
      tags: "Book_!t" 
    },
    (err, image) => {
      if (err) {
        console.warn(err);
      }
      roomImg = image.url;
      res.status(200).send("success");
    }
  );
};

module.exports.create = (req, res) => {
  const room = {
    name: req.body.name,
    location: req.body.location,
    image: roomImg,
    seats: req.body.seats,
    facilities: req.body.facilities
  };

  const newRoom = new Room(room);

  newRoom
    .save()
    .then(() => res.status(201).json({ message: "Venue added successfully!" }))
    .catch(err =>
      res.status(400).json({ error: err, Message: "Venue could not be added" })
    );
};

module.exports.getAll = (req, res) => {
  Room.find()
    .then(spots => res.status(200).json({ body: spots }))
    .catch(err =>
      res.status(404).json({ error: err, message: "Venues could not be fetched." })
    );
};

module.exports.getOne = (req, res) => {
  Room.findById(req.params.venueId)
    .then(room => res.json({ body: room }))
    .catch(err =>
      res.status(404).json({ error: err, message: "Cannot find venue " })
    );
};

module.exports.update = (req, res) => {
  const room = req.body;

  Todo.findByIdAndUpdate({ _id: req.params.venueId }, room, { new: true })
    .then(spot =>
      res.json({ body: spot, message: "venue updated successfully" })
    )
    .catch(err =>
      res.status(400).json({ error: err, message: "cannot update venue" })
    );
};

module.exports.delete = (req, res) => {
  Todo.findOneAndDelete({ _id: req.params.venueId })
    .then(todos => res.json({ message: "venue has been deleted" }))
    .catch(err =>
      res.status(400).json({ error: err, message: "cannot delete spot" })
    );
};
