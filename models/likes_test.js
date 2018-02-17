'use strict';
module.exports = (sequelize, DataTypes) => {
  var likes_test = sequelize.define('likes_test', {
    bookID: DataTypes.INTEGER,
    likeStatus: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return likes_test;
};