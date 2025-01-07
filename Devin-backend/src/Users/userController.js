import userModel from "./userModel.js";
import { validationResult } from "express-validator";
import { registerUserinDb } from "./userServices";
import redisClient from "../services/redisServices.js";


export const createUser= async (req,res)=>{
         
    try {
            const errors =validationResult(req)
             if (!errors.isEmpty()) {
                 return res.status(400).json({errors:errors.array()})
                 
             }
     
             const {firstname,lastname,email,password} = req.body;
             const user = await registerUserinDb( {firstname,lastname,email,password})
             console.log(user);
             if (user.alreadyRegister) {
                return res.status(401).json({result:user})
                
             }
             const token = user.generateAuthToken()
             return res.status(201).json({user,token})
    } catch (error) {
        console.log(error);
        
        return res.status(400).send(error)

    }
}

export const loginUser =async (req,res)=>{
    try {

        const errors =validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({errors:errors.array()})
            
        }

        const {email,password} =req.body;

 //       // find captain is present in db
        const user = await userModel.findOne({email}).select('+password');
        console.log(user);
        
// if captain is not present then return error
        if (!user) {
            return res.status(401).json({msg:'invalid email and password'})
            
        }
// if captain present  --->  password  match    
        const isMatch = await user.comparePassword(password);
        // console.log(isMatch);
        console.log(isMatch);
        
        if (!isMatch) {
            return res.status(401).json({msg:'invalid email and password'})
            
        }
//    generate token and send token in res
console.log('2222ttt');
        const token = user.generateAuthToken(user._id);
        //  delete captain.password;
        console.log('ttt');
        
        res.status(201).json({token,user})  

    } catch (error) {
        console.log('some error in login : '+error);
        
    }

}



export const logoutUser = async(req,res)=>{
    try {
        const token = req.headers?.authorization?.split(' ')[1] || req.cookies?.token 

         redisClient.set(token,'logout','EX',60*60*24)
        res.clearCookie('token').status(200).json({msg:'you are logout sucessfully'});
    } catch (error) {
        res.status(400).send(error.message)
    }
}