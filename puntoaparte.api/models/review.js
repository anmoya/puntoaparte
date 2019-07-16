'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    date: DataTypes.DATE,
    likes: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER
  }, 
  {
    schema: "public",
    tableName: "Reviews"
  });
  Review.associate = function(models) {
    Review.belongsTo(models.Book);
    };
  return Review;
};