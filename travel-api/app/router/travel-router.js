const verifySignUpController = require("../controller").verifySignUp;
const verifySignController = require("../controller").verifySign;
const verifyJwtTokenController = require("../controller").verifyJwtToken;
const verifyDestinationController = require("../controller").verifyDestination;
const verifyOrderController = require("../controller").verifyOrder;

module.exports = function (app) {
  //User Auth
  app.post("/api/auth/signup", verifySignUpController.checkDuplicateEmail, verifySignController.signup);

  app.post("/api/auth/signin", verifySignController.signin);

  app.get("/api/users/destination/list", verifyJwtTokenController.verifyToken, verifyDestinationController.destinationList);

  app.post("/api/users/ticket/order", verifyJwtTokenController.verifyToken, verifyOrderController.ticketOrder);

  app.get("/api/users/myticket", verifyJwtTokenController.verifyToken, verifyOrderController.listTicket);
};
