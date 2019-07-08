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
    });
  };
  return Author;
};