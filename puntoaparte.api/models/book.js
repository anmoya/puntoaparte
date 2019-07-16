'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    isbn: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    abstract: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    AuthorId: DataTypes.INTEGER
  }, {
    schema: "public",
    tableName: "Books"
  });
  Book.associate = function(models) {
    Book.belongsTo(models.Author);
    Book.hasMany(models.Review);
  };
  return Book;
};