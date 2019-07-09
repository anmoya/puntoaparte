'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    abstract: DataTypes.STRING,
    year: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {});
  review.associate = function(models) {
    review.belongsTo(models.Author, {
      foreignKey: 'author_id'
    });
  };
  return review;
};