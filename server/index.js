// importing env variables
import dotenv from 'dotenv'
dotenv.config()

// libraries
import express from "express";
import cors from 'cors';
import helmet from 'helmet';

// Database Connection

import ConnectDB from './database/connection.js'

const app=express();

// application middleware 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helmet())
app.use(cors())


app.get("/",(req,res)=>{
    return res.json({message:"Setup done"})
})


app.listen((5000),()=>ConnectDB().then(()=>  console.log(`Server running`)).catch(()=>
    console.log(`Server running but db connection failed !!!`)
))