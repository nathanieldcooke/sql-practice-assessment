'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Courses', [
      { name: 'Macro', level: 860, campusId: 2, departmentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Calculus', level: 830, campusId: 2, departmentId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Discrete', level: 690, campusId: 4, departmentId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Orchestra', level: 280, campusId: 1, departmentId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Appreciation', level: 650, campusId: 1, departmentId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Supply Chain', level: 790, campusId: 2, departmentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Algebra', level: 300, campusId: 2, departmentId: 2, createdAt: new Date(), updatedAt: new Date() },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Courses', null, {});

  }
};
