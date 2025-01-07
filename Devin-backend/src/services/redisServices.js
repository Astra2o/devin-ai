import Redis from 'ioredis'
import { conf } from '../config/config.js'


const redisClient = new Redis({
        host:conf.redisHost,
        port:conf.redisPort,
        password:conf.redisPassword
})


redisClient.on('connect',()=>{
    console.log('Redis connected');
    
})


export default redisClient