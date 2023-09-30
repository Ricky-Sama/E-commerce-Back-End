// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // Data type set to INTEGER
      allowNull: false, // Reject NULL values
      primaryKey: true, // Set as the primary key
      autoIncrement: true, // Automatically increment the value for each new record
    },
    product_name: {
      type: DataTypes.STRING, // Data type set to STRING
      allowNull: false, // Reject NULL values
    },
    price: {
      type: DataTypes.DECIMAL, // Data type set to DECIMAL
      allowNull: false, // Reject NULL values
      validate: {
        isDecimal: true, // Validate that the value is a decimal number
      },
    },
    stock: {
      type: DataTypes.INTEGER, // Data type set to INTEGER
      allowNull: false, // Reject NULL values
      defaultValue: 10, // Set the default value to 10
      validate: {
        isNumeric: true, // Validate that the value is a numeric value
      },
    },
    category_id: {
      type: DataTypes.INTEGER, // Data type set to INTEGER
      references: {
        model: "category", // Reference to the category model
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
