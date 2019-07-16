'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    schema: "public",
    tableName: "Authors"
  });
  Author.associate = function(models) {
    Author.hasMany(models.Book);
  };
  return Author;
};