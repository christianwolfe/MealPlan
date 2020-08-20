const db = require("../models/user");

module.exports = {
  update: function(req, res) {
    db.User
      .findOneAndUpdate({_id: req.params.id}, req.body)
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
  }
};