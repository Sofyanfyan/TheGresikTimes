if (process.env.NODE_ENV !== 'production') {
   require('dotenv').config();
}
   
const express = require('express')
const app = express()
const port = process.env.PORT || 4002
const cors = require('cors')
const router = require('./routes/router')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(router)

app.use((err, req, res, next) => {
   
   let code = 500
   let message = {message: "Internal server error"}

   if(err.name === "SequelizeValidationError"){
      code = 400
      message.message = err.errors[0].message
   } else if (err.name === "SequelizeUniqueConstraintError"){
      code = 400
      message.message = err.errors[0].message
   } else if (err.name === "Email is required" || err.name === "Password is required"){
      code = 400
      message.message = err.name
   } else if (err.name === 'News not found'){
      code = 404
      message.message = err.name
   } else if (err.name === 'Category not found'){
      code = 404
      message.message = err.name
   } else if (err.name === 'JsonWebTokenError' || err.name === 'Invalid token'){
      code = 401
      message.message = 'Invalid token'
   } else if (err.name === "Invalid email and password"){
      code = 401
      message.message = err.name
   } else if (err.name === "Tag must be 3"){
      code = 400
      message.message = err.name
   }

   console.log(err);
   res.status(code).json(message)
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})