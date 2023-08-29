const bcrypt = require('bcryptjs')

const hashPassword = (password) => {
   return bcrypt.hashSync(password, 10)
}

const comparePassword = (origin, password) => {
   return bcrypt.compareSync(origin, password)
}

module.exports ={
   hashPassword,
   comparePassword
}