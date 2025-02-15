import  jwt  from "jsonwebtoken";
import { conf } from "../config/config.js";
import redisClient from "../services/redisServices.js";




export const authUser = async(req,res,next)=>{
    try {
        const token = req.headers?.authorization?.split(' ')[1] || req.cookies?.token 
        if(!token){
         return   res.status(401).send('unautorised user')

        }

        // check  is  token is not blacklisted  on redis 
        const isBlackListed = await redisClient.get(token);
        // console.log(isBlackListed);
        
        if (isBlackListed) {
          return  res.status(401).send('unautorised  user')

        }
        
        const decoded = jwt.verify(token,conf.jwtSecret)
        console.log(decoded);
        
        req.user=decoded;
        return next()
    } catch (error) {
      return  res.status(401).send(error)
    }
}