'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "Username is required"
         }, 
         notEmpty: {
            msg: "Username is required"
         }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "Email is required"
         }, 
         notEmpty: {
            msg: "Email is required"
         }, 
         isEmail:{
            msg: "Invalid email format"
         }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "Password is required"
         }, 
         notEmpty: {
            msg: "Password is required"
         }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "phoneNumber is required"
         }, 
         notEmpty: {
            msg: "phoneNumber is required"
         }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "Address is required"
         }, 
         notEmpty: {
            msg: "Address is required"
         }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "Address is required"
         }, 
         notEmpty: {
            msg: "Address is required"
         }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance, options) => {
      instance.password = hashPassword(instance.password)
 });
  return User;
};