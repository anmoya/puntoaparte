'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    book_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {})
  comments.associate = function(models) {
    comments.belongsTo(models.Book, {
      foreignKey: 'book_id'
    }),
    comments.belongsTo(models.user, {
      foreignKey: 'user_id'
    })
  }
  return comments;
};