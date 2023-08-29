const {connect, getDb} = require('../config/mongodb') 
const {ObjectId} = require('mongodb')
const User = require('../models/user')

class Controller {

   static async findAllUser(req, res, next){
      
      try {


         const data = await User.findAll()

         res.status(200).json(data)
      } catch (error) {
         next(error)
      }
   }


   static async findOneUser(req, res, next){
      
      
      try {

         const {id} = req.params
         const data = await User.findOne(id)
         
         res.status(200).json(data)
      } catch (error) {
         next(error)
      }
   }


   static async createUser(req, res, next){
      try {

         const {username, email, password, phoneNumber, address} = req.body

         const role = 'admin'

         await User.create({username, email, password, phoneNumber, address, role})

         res.status(201).json({message: "Create users success"})

      } catch (error) {
         next(error)
      }
   }

   static async deleteUser(req, res, next){
      
      try {

         const {id} = req.params
         await User.destroy(id)
         
         res.status(200).json({message: "Success delete user with id " + id})
      } catch (error) {
         next(error)
      }
   }

}


module.exports = Controller