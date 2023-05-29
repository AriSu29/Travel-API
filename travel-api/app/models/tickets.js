"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tickets.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      Tickets.belongsTo(models.Destination, { foreignKey: "destinationId", as: "destination" });
    }
  }
  Tickets.init(
    {
      nomer: DataTypes.INTEGER,
      destination_city: DataTypes.STRING,
      type: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tickets",
    }
  );
  return Tickets;
};
