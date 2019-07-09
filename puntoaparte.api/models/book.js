'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    abstract: DataTypes.STRING,
    price: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    Book.belongsTo(models.Author, {
      foreignKey: 'author_id'
    }),
    Book.hasMany(models.comments, {
      foreignKey: 'comments_id'
    });
  };
  return Book;
};