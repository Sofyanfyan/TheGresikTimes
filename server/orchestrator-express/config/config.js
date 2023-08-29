const Redis = require('ioredis')

const redis = new Redis({
   port: 15205,
   host: 'redis-15205.c1.ap-southeast-1-1.ec2.cloud.redislabs.com',
   username: 'default',
   password: 'RX7iMJOf4flFSs0ZjhTHp0ZxcHxBpgib',
   db: 0,
})


module.exports = redis