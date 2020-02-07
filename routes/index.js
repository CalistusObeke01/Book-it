var multer = require("multer");
var upload = multer({ dest: "temp/", limits: { fieldSize: 8 * 1024 * 1024 } });
const roomResource = require("../controllers/roomController");

const bookingResource = require("../controllers/bookingController");

const userResource = require("../controllers/userController");

module.exports = app => {
  app
    .route("/api/venue/")
    .post(roomResource.create)
    .get(roomResource.getAll);

  app
    .route("/api/venue/upload/")
    .post(upload.single("file"), roomResource.upload);

  app
    .route("/api/venue/:venueId")
    .get(roomResource.getOne)
    .put(roomResource.update)
    .delete(roomResource.delete);

  app
    .route("/api/bookings/")
    .post(bookingResource.create)
    .get(bookingResource.getMany);

  app
    .route("/api/booking/:bookingId")
    .get(bookingResource.getOne)
    .put(bookingResource.update)
    .delete(bookingResource.delete);

  app.route("/api/users/").post(userResource.create);

  app.route("/api/users/login").post(userResource.login);

  app
    .route("/api/users/upload/")
    .post(upload.single("file"), userResource.upload);
};
