'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      Post.hasMany(models.Tag)
      Post.belongsTo(models.User)
      Post.belongsTo(models.Category)
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "Title is required"
         }, 
         notEmpty: {
            msg: "Title is required"
         }
      }
    },
    slug: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "Content is required"
         }, 
         notEmpty: {
            msg: "Content is required"
         }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "Image is required"
         }, 
         notEmpty: {
            msg: "Image is required"
         }
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "Category id is required"
         }, 
         notEmpty: {
            msg: "Category id is required"
         }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: "Creator is required"
         }, 
         notEmpty: {
            msg: "Creator is required"
         }
      }
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  Post.beforeCreate((instance) => {

   instance.slug = instance.title.split(" ").join("-")
  })
  return Post;
};