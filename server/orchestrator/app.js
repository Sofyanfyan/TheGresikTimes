const {ApolloServer} = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const {userDefs, userResolvers} = require('./schema/user')
const {newsDefs, newsResolvers} = require('./schema/news')

const server = new ApolloServer({
   typeDefs: [userDefs, newsDefs], 
   resolvers: [userResolvers, newsResolvers]
})



startStandaloneServer(server, {
   listen: 4000
})
.then(({url}) => {
   console.log(`🚀  Server ready at ${url}`)
}) 