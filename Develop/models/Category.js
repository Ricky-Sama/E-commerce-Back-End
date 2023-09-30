const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // Define the 'id' column
    id: {
      type: DataTypes.INTEGER, // Data type set to INTEGER
      allowNull: false, // Reject NULL values
      primaryKey: true, // Set as primary key
      autoIncrement: true, // Automatically increment the value for each new record
  },
      // Define the 'category_name' column
      category_name: {
        type: DataTypes.STRING, // Data type set to STRING
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
