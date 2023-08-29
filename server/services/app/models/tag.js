'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tag.belongsTo(models.Post)
    }
  }
  Tag.init({
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "News id is required"
         }, 
         notEmpty: {
            msg: "News id is required"
         }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "Name tag is required"
         }, 
         notEmpty: {
            msg: "Name tag is required"
         }
      }
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};