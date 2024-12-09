// importing env variables
import dotenv from 'dotenv'
dotenv.config()

// libraries
import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';

// config
import googleAuthConfig from './config/google.config.js'

// microservice route

import Auth from "./API/Auth/index.js"

// Database Connection

import ConnectDB from './database/connection.js'

const app=express();

// application middleware 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helmet())
app.use(cors())

// passport config
googleAuthConfig(passport);

// application routes

app.use("/auth",Auth)


app.get("/",(req,res)=>{
    return res.json({message:"Setup done"})
})


app.listen((5000),()=>ConnectDB().then(()=>  console.log(`Server running`)).catch(()=>
    console.log(`Server running but db connection failed !!!`)
))