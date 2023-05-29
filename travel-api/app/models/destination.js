"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Destination.hasMany(models.Tickets, { foreignKey: "destinationId", as: "tickets" });
    }
  }
  Destination.init(
    {
      city: DataTypes.STRING,
      price: DataTypes.INTEGER,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Destination",
    }
  );
  return Destination;
};
