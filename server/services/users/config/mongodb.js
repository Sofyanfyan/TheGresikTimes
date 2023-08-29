const {MongoClient} = require('mongodb')

const uri =  'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2'

const client = new MongoClient(uri)

let db

async function connect() {

   try {
      await client.connect()
      console.log("mongodb connected...")
      db = client.db("news_portal")
   } catch (error) {
      await client.close()
   }

}

function getDb(){
   return db
}

module.exports = {
   connect,
   getDb
}