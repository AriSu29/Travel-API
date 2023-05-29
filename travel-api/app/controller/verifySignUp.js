const User = require("../models").User;

module.exports = {
  checkDuplicateEmail(req, res, next) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: "Error",
          errors: "Email Sudah digunakan!",
        });
        return;
      }
      next();
    });
  },
};
