'use strict';
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }, {});
  Department.associate = function(models) {
    // associations can be defined here

    Department.hasMany(models.Course, { foreignKey: 'departmentId' })
    // Department.hasMany(models.Department, { foreignKey: 'departmentId' })

  };
  return Department;
};