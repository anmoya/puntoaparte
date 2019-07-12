'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    isbn: DataTypes.STRING,
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    abstract: DataTypes.TEXT,
    year: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    Book.belongsTo(models.Author);
    Book.hasMany(models.Review);
  };
  return Book;
};