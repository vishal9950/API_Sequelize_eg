'use strict';
module.exports = (sequelize, DataTypes) => {
  var books_test = sequelize.define('books_test', {
    author: DataTypes.STRING,
    booksID: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return books_test;
};