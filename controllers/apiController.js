const Reservation = require("../models/reservations");


module.exports = {
  async getRes (req, res) {
    try {
      console.log(req);
      const reservation = await Reservation.findById(req.id);
      res.json(reservation);
    } catch(err) {
      throw err;
    }
  }
};