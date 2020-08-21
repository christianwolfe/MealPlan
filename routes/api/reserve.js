const router = require("express").Router();
const User = require("../../models/user");
const Reservation = require("../../models/reservations");

router.post("/reserve", (req, res) => {
  const userId = req.body.userId;
  console.log(userId);
  Reservation.create({location: req.body.location, lastreservation: req.body.lastreservation})
    .then(({ _id }) => User.findByIdAndUpdate(userId, { $push: { reservations: _id } }, { new: true }))
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;