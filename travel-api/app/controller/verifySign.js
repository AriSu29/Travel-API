const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models/index");
const User = require("../models").User;
const config = require("../config/config.js");
const Op = db.Sequelize.Op;

module.exports = {
  signup(req, res) {
    return User.create({
      name: req.body.name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      password: bcrypt.hashSync(req.body.password, 8),
    })
      .then(() => {
        res.status(200).send({
          message: "Berhasil Membuat Akun!",
        });
      })
      .catch((err) => {
        res.status(404).send({
          message: err.message,
        });
      });
  },

  signin(req, res) {
    return User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "User Not Found.",
          });
        }

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
          return res.status(401).send({
            message: "Invalid Email or Password!",
          });
        }

        var token =
          "user " +
          jwt.sign(
            {
              id: user.id,
            },
            config.secret,
            {
              expiresIn: 86400, // 24 hours expiration
            }
          );

        res.status(200).send({
          auth: true,
          name: user.name, // Menggunakan nama pengguna yang ditemukan dari database
          accessToken: token,
        });
      })
      .catch((err) => {
        console.error(err); // Menampilkan pesan kesalahan pada konsol
        res.status(500).send({
          accessToken: null,
          message: "Error",
          errors: err,
        });
      });
  },
};
