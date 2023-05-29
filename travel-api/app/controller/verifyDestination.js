const Destination = require("../models").Destination;

module.exports = {
  destinationList(req, res) {
    Destination.findAll()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error saat mencari destinasi!",
        });
      });
  },
};
