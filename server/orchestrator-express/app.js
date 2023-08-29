const express = require('express')
const app = express()
const port = 4000
const router = require('./routes/router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(router)

app.use((err, req, res, next) => {
   
   let code = 500 
   let messege = {messege: 'Internal server error'}


   console.log(err, "<<<<<<<<<<<<<");
   res.status(code).json(messege)
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})