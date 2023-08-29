const {getDb} = require('../config/mongodb')
const {ObjectId} = require('mongodb')
const { hashPassword } = require('../helpers')
class User {
   
   static model() {
      return getDb().collection('users')
   }


   static async findAll() {
      return await this.model().find().toArray();
   }


   static async findOne(id) {
      return await this.model().findOne({_id: ObjectId(id)})
   }


   static async create(body) {

      const {username, email, password, phoneNumber, address, role} = body
      
      
      return await this.model().insertOne({
         username, 
         email,
         password: hashPassword(password),
         phoneNumber, 
         address, 
         role,
      })
   }


   static async destroy(id) {

      return await this.model().deleteOne({_id: ObjectId(id)})
   }
}




module.exports = User