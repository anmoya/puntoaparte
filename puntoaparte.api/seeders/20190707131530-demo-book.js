"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "John",
          subtitle: "Doe",
          abstract: "asdf",
          price:5889,
          year:1999
        },
        {
          title: "Juanito",
          subtitle: "Doe",
          abstract: "Un libro malo",
          price:5889,
          year:1999
        },
        {
          title: "Carlos",
          subtitle: "asdf",
          abstract: "Un libro muy bueno",
          price:5889,
          year:1999
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Books", null, {});
  }
};
