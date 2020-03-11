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
    {
      folder: "Book-!t/rooms",
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
    features: req.body.features,
    company: req.body.company
  };

  const newRoom = new Room(room);

  newRoom
    .save()
    .then(() => res.status(201).json({ message: "Venue added successfully!" }))
    .catch(err =>
      res.status(400).json({ error: err, Message: "Venue could not be added" })
    );
};

module.exports.getMany = async (req, res) => {
  const rooms = await Room.find({ company: req.params.company });
  if (rooms == null || undefined) {
    return res.status(401).json({ message: "no rooms found" });
  } else {
    try {
      res.status(200).json({
        body: rooms
      });
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  }
};

module.exports.getOne = (req, res) => {
  console.log(req.params.venueId);
  Room.findById(req.params.venueId)
    .then(room => {
      console.log(room);
      res.json({ body: room });
    })
    .catch(err =>
      res.status(404).json({ error: err, message: "Cannot find venue " })
    );
};

module.exports.update = (req, res) => {
  const room = req.body;
  Room.findByIdAndUpdate({ _id: req.params.venueId }, room, { new: true })
    .then(spot =>
      res.json({ body: spot, message: "venue updated successfully" })
    )
    .catch(err =>
      res.status(400).json({ error: err, message: "cannot update venue" })
    );
};

module.exports.delete = (req, res) => {
  Room.findOneAndDelete({ _id: req.params.venueId })
    .then(room => res.json({ message: "venue has been deleted" }))
    .catch(err =>
      res.status(400).json({ error: err, message: "cannot delete spot" })
    );
};
