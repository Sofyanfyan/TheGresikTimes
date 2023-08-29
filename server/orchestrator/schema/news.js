const axios = require('axios')
const newsAPI = 'http://localhost:4002/pub/news'

const newsDefs = `#graphql
   
   type News {
      title: String,
      slug: String,
      content: String,
   }

   type Query {
      news: [News]
   }
`

const newsResolvers = {
   Query: {
      news: async () => {
         const {data} = await axios.get(newsAPI)
         return data
      }
   }
}

module.exports = {
   newsDefs, newsResolvers
}