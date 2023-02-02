'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey: "user_id"});
    }
  }
  task.init({
    user_id: DataTypes.INTEGER,
    taskname: DataTypes.STRING,
    tasktype: {
      type:DataTypes.ENUM,
      values: ['Pending', 'Done']
    },
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};