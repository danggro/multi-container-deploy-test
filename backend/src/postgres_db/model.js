const { DataTypes, Model, Sequelize } = require("sequelize");
const { sequelize } = require("../config");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "User", // We need to choose the model name
  }
);

module.exports = User;
