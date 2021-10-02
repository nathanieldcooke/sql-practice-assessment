'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
    
    const columnMapping = {
      through: 'Enrollment',
      otherKey: 'courseId',
      foreignKey: 'personId'
    }
    Person.belongsToMany(models.Course, columnMapping);
  };
  return Person;
};