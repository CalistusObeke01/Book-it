require("dotenv").config();
const bcrypt = require("bcrypt");
var cloudinary = require("cloudinary").v2;
let User = require("../models/user.model");
var userImg;

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
      folder: "Book-!t/users",
      use_filename: true,
      unique_filename: true,
      overwrite: false,
      tags: "Book_!t"
    },
    (err, image) => {
      if (err) {
        console.warn(err);
      }
      userImg = image.url;
      res.send(userImg);
    }
  );
};

module.exports.create = async (req, res) => {
  acct = await User.findOne({ email: req.body.email });
  org = await User.findOne({ company: req.body.company });
  if (acct != null) {
    res.status(403).send("User exists");
  } else if (org != null) {
    res.status(401).send("Company exists");
  } else {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const user = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        image: userImg || "N/A",
        admin: req.body.admin || false,
        company: req.body.company
      };

      const newUser = new User(user);

      newUser
        .save()
        .then(() => res.status(201).json({ message: "User created." }))
        .catch(err =>
          res.status(400).json({ error: err, Message: "User Not created" })
        );
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  }
};

module.exports.adminCreate = async (req, res) => {
  acct = await User.findOne({ email: req.body.email });
  if (acct != null) {
    res.status(403).json({
      message:
        "User already exists with this account details. Login to continue"
    });
  } else {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const user = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        image: userImg || "N/A",
        admin: req.body.admin || false,
        company: req.body.company
      };

      const newUser = new User(user);

      newUser
        .save()
        .then(() => res.status(201).json({ message: "User created." }))
        .catch(err =>
          res.status(400).json({ error: err, Message: "User Not created" })
        );
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  }
};

module.exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user == null || undefined) {
    return res.status(401).json({ message: "user not found" });
  } else {
    try {
      const check = await bcrypt.compare(req.body.password, user.password);
      if (check) {
        res.status(200).json({
          body: {
            name: user.name,
            company: user.company,
            admin: user.admin,
            id: user._id
          }
        });
      } else {
        res.status(401).json({ message: "incorrect password" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  }
};
