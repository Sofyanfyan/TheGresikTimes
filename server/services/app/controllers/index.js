const { comparePassword, signToken } = require('../helpers');
const {User, Post, Tag, Category} = require('../models');

const {sequelize} = require('../models/index')

class Controller {
   
   static async register(req, res, next){
   
      try {
         
         
         const {username, email, password, phoneNumber, address} = req.body

         const role = 'admin'

         const user = await User.create({username, email, password, phoneNumber, address, role})

         const newUser = {
            id: user.id,
            username: user.username, 
            email: user.email
         }

         res.status(201).json({
            messege: "success create user",
            newUser
         })
         
      } catch (error) {
         next(error)
      }
   }

   static async login(req, res, next){
      try {
         
         const {email, password} = req.body

         if(!email){
            throw {name: "Email is required"}
         }
         if(!password){
            throw {name: "Password is required"}
         }

         const user =  await User.findOne({
            where: {
               email
            }
         })

         if(!user){
            
            throw {name: "Invalid email and password"}
         }

         const validate = comparePassword(password, user.password)


         if(!validate){
            
            throw {name: "Invalid email and password"}
         }

         const payload = {
            id: user.id
         }

         const access_token = signToken(payload)

         res.status(200).json({ access_token })

      } catch (error) {
         next(error)
      }
   }



   static async createNews(req, res, next) {
      
      const t = await sequelize.transaction();

      try {
         
         const {title, content, imgUrl, CategoryId, tag1, tag2, tag3} = req.body
         const {id} = req.user
         
         const t = await sequelize.transaction();
         const news = await Post.create({
            title, 
            content,
            imgUrl,
            CategoryId,
            UserId: id
         }, { transaction: t })

         if (!tag1 || !tag2 || !tag3){
            throw {name: "Tag must be 3"}
         }

         const data = [
         {
            PostId: news.id,
            name: tag1,
         },
         {
            PostId: news.id,
            name: tag2,
         },
         {
            PostId: news.id,
            name: tag3,
         },
         
      ]

         await Tag.bulkCreate(data, { transaction: t })

         await t.commit();

         res.status(201).json({message: "Success Create News"})
      } catch (error) {
         await t.rollback();
         next(error)
      }
   }

   static async getNews (req,res, next) {
      
      try {
         
         const data = await Post.findAll({
            include: [{
                  model: User,
                  attributes: { exclude: ['password'] }
               },
               {
                  model: Category
               },
               {
                  model: Tag
               }
            ],
            order:[['createdAt', 'DESC']]
            })

         res.status(200).json(data)

      } catch (error) {
         
         next(error)
      }
   }

   static async deleteNews (req,res, next) {

      try {
         
         const {id} = req.params

         const check = await Post.findByPk(id)

         if(!check){
            throw {name: "News not found"}
         }

         await Post.destroy({
            where: {
               id
            }
         })

         res.status(200).json({message: "Success delete news"})
      } catch (error) {
         
      }
   } 


   static async updateNews (req, res, next) {

      const t = await sequelize.transaction();
      
      try {
         
         const {title, content, imgUrl, CategoryId, tag1, tag2, tag3} = req.body

         const {id} = req.params

         const check = await Post.findByPk(id)

         if(!check){
            throw {name: "News not found"}
         }

         const slug = title.split(" ").join("-")

         await Tag.destroy({
            where:{
               PostId: id 
            }
         }, { transaction: t })

         await Post.update({
            title, content, imgUrl, CategoryId, slug
         }, {
            where: {
               id
            }
         }, { transaction: t})

         if (!tag1 || !tag2 || !tag3){
            throw {name: "Tag must be 3"}
         }

         const data = [
         {
            PostId: id,
            name: tag1,
         },
         {
            PostId: id,
            name: tag2,
         },
         {
            PostId: id,
            name: tag3,
         },
         
      ]

         await Tag.bulkCreate(data, { transaction: t })
         await t.commit();

         res.status(200).json({message: "Success updated news with id = " + id})
      } catch (error) {

         await t.rollback();
         next(error)
      }
   }

   static async getNewsById(req, res, next){
      
      try {
         
         const {id} = req.params

         const check = await Post.findByPk(id)

         if(!check){
            throw {name: "News not found"}
         }

         const data = await Post.findOne({
            where:{
               id
            },
            include: [{
               model: User,
               attributes: { exclude: ['password'] }
            },
            {
               model: Category
            },
            {
               model: Tag
            }
            ]
         })

         if(!data){
            throw {name: "News not found"}
         }

         res.status(200).json(data)
      } catch (error) {
         next(error)
      }

   }

   static async createCategory(req, res, next){
      
      try {
         
         const {name} = req.body
         
         const newCat = await Category.create({
            name
         })

         res.status(201).json({
            message: "Success Create Category",
            Category: newCat
         })

      } catch (error) {
         
         next(error)
      }
   }


   static async getCategory(req, res, next) {
      try {
         
         const data = await Category.findAll()

         res.status(200).json(data)

      } catch (error) {
         next(error)
      }
   }

   static async deleteCategory(req, res, next) {
   
      try {
         
         const {id} = req.params 

         const check = await Category.findByPk(id)
         
         if(!check){
            throw {name: "Category not found"}
         }

         await Category.destroy({
            where: {
               id
            }
         })

         res.status(200).json({message: "Success delete category"})

      } catch (error) {
         next(error)
      }
   }


   static async updateCategory(req, res, next) {
      
      try {

         const {name} = req.body
         const {id} = req.params

         const check = await Category.findByPk(id)
         
         if(!check){
            throw {name: "Category not found"}
         }

         await Category.update({
            name
         }, 
         {
            where:{
               id
            }
         })

         res.status(201).json({message: "Success update category with id " + id})

      } catch (error) {
         next(error)
      }
   }


   static async getCategoryById(req, res, next){
      try {

         const {id} = req.params

         const data = await Category.findByPk(id)

         if(!data){
            throw {name: "Category not found"}
         }

         res.status(200).json(data)
         
      } catch (error) {
         next(error)
      }
   }

   static async registerCustomer(req, res, next){

      try {
         
         
         const {username, email, password, phoneNumber, address} = req.body

         const role = 'user'

         const user = await User.create({username, email, password, phoneNumber, address, role})

         const newUser = {
            id: user.id,
            username: user.username, 
            email: user.email
         }

         res.status(201).json({
            messege: "success create user",
            newUser
         })
         
      } catch (error) {

         next(error)
      }
   }


   static async loginCustomer(req, res, next){
      try {
         
         const {email, password} = req.body

         if(!email){
            throw {name: "Email is required"}
         }
         if(!password){
            throw {name: "Password is required"}
         }

         const user =  await User.findOne({
            where: {
               email
            }
         })

         if(!user || user.role === 'admin'){
            
            throw {name: "Invalid email and password"}
         }

         const validate = comparePassword(password, user.password)


         if(!validate){
            
            throw {name: "Invalid email and password"}
         }

         const payload = {
            id: user.id
         }

         const access_token = signToken(payload)

         res.status(200).json({ access_token })

      } catch (error) {
         next(error)
      }
   }
}

module.exports = Controller