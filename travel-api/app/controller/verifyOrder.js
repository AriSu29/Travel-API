const Ticket = require("../models").Tickets;
const Destination = require("../models").Destination;
const User = require("../models").User;

module.exports = {
  ticketOrder(req, res) {
    const tujuan = req.body.destination;
    Destination.findOne({
      where: {
        city: tujuan,
      },
    })
      .then((destination) => {
        if (destination) {
          let type_buss = "";
          const no_kursi = Math.floor(Math.random() * 59) + 1;
          if (no_kursi % 2 == 0) {
            type_buss = "Regular";
          } else {
            type_buss = "Express";
          }

          Ticket.create({
            nomer: no_kursi,
            destination_city: tujuan,
            type: type_buss,
            destinationId: destination.id,
            userId: req.userId,
          })
            .then((result) => {
              res.status(200).send({
                message: "Pembelian tiket berhasil!",
              });
            })
            .catch((err) => {
              res.status(500).send({
                message: "Terjadi kesalahan saat membuat tiket.",
                error: err.message,
              });
            });
        } else {
          res.status(404).send({
            message: "Destinasi tidak tersedia",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Terjadi kesalahan saat mencari destinasi.",
          error: err.message,
        });
      });
  },

  listTicket(req, res) {
    User.findOne({
      where: {
        name: req.body.name,
      },
    })
      .then((user) => {
        if (!user) {
          res.status(404).send({
            message: "User not found!",
          });
        }

        Ticket.findAll({
          where: {
            userId: user.id,
          },
          include: [{ model: Destination, as: "destination" }],
        })
          .then((result) => {
            res.status(200).send({
              tickets: result,
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message: "Error",
              errors: err,
            });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Error",
          errors: err,
        });
      });
  },
};
