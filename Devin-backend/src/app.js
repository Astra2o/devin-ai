import express from 'express'
import cors from 'cors';
import morgan from 'morgan'
import connectDB from './config/db.js';
import userRouter from './Users/userRoutes.js';
import projectRouter from './Projects/ProjectRoutes.js';
const app =express ();
app.use(morgan('dev'))
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))



connectDB()

//  routes
app.use('/user',userRouter)
app.use('/projects',projectRouter)

app.get('/',(req,res)=>{
    res.send('hello , this is res of get req')
})

export default app;