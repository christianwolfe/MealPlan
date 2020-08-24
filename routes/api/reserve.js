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

// async getUser (req, res) {
//   try {
//     // find user by id
//     const user = await User.findById(req.userId)
//       // return all info but password
//       .select("-password");
//     // send info to client
//     res.json(user);
//   } catch (err) {
//     throw err;
//   }
// }

router.get("/reserve/:email", (req, res) => {

  console.log(req.params.email);

  //this is the current user

  User.findOne({email: req.params.email})
  //populate the array called reservations
    .populate("reservations")
    .then(( reservations ) => {
      console.log(reservations);
      res.json(reservations);
    })

    .catch(err => {
      res.json(err);
    });
});

// router.get("/reserve", (req, res) => {
//   console.log(req);
//   Reservation.findOne({})
//     .then(( reservations ) => {
//       res.json(reservations);
//     })

//     .catch(err => {
//       res.json(err);
//     });
// });



module.exports = router;