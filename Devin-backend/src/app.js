import express from 'express'
import cors from 'cors';

const app =express ();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))



//  routes


app.get('/',(req,res)=>{
    res.send('hello , this is res of get req')
})

export default app;