'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    city: DataTypes.STRING,
    birth: DataTypes.DATE,
    bio: DataTypes.STRING
  }, {});
  Author.associate = function(models) {
    Author.hasMany(models.Book, {
      foreignKey: 'author_id',
      as: 'books'
    }),
    Author.hasMany(models.review, {
      foreignKey: 'author_id',
      as: 'reviews'
    });
  };
  return Author;
};