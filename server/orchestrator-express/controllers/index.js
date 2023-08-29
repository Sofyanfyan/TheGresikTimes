const axios = require('axios')
const redis = require('../config/config')

const userAPI = 'http://localhost:4001'

class Controller {


   static async getAll (req, res, next){

      try {

         const usersCache = await redis.get('users:all')

         if(usersCache) {

            const data = JSON.parse(usersCache)
            res.status(200).json(data)
            return
         }
         
         const {data} = await axios({
            method: 'GET', 
            url: userAPI + '/users',
         })

         await redis.set('users:all', JSON.stringify(data))

         res.status(200).json(data)

      } catch (error) {
         next(error)
      }

   }


   static async createUser(req, res, next) {
      
      try {
         
         const {username, email, password, phoneNumber, address} = req.body

         await axios({
            method: "POST", 
            data: {
               username, 
               email, 
               password, 
               phoneNumber, 
               address
            }, 
            url: userAPI + '/users'
         })

         redis.del('users:all')

         res.status(201).json({messege: "Success create user"})

      } catch (error) {
         
         next(error)
      }
   }



   static async deleteUser(req, res, next){


      try {
         
         const {id} = req.params

         await axios({
            method: "DELETE", 
            url: userAPI + '/users/' + id
         })

         redis.del('users:all')

         res.status(200).json({messege: "Success delete user with id " + id})

      } catch (error) {
         next(error)
      }

   }

}

module.exports = Controller