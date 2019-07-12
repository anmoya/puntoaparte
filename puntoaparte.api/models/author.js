'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    born: DataTypes.DATE
  }, {});
  Author.associate = function(models) {
    Author.hasMany(models.Book);
  };
  return Author;
};