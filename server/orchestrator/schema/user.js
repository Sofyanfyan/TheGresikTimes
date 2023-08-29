const axios = require('axios')
const userAPI = 'http://localhost:4001/users'

const userDefs = `#graphql
   
   type User {
      username: String,
      email: String, 
      phoneNumber: String, 
      address: String,
   }

   type Query {
      users: [User]
   }
`

const userResolvers = {
   Query: {
      users: async () => {
         const {data} = await axios.get(userAPI)
         return data
      }
   }
}

module.exports = {
   userDefs, userResolvers
}