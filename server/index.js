// importing env variables
import dotenv from 'dotenv'
dotenv.config()

// libraries
import express from "express";
import session from 'express-session';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';



// config
import GoogleAuthConfig from './config/google.config.js'
import routeConfig from './config/route.config.js';

// microservice route

import Auth from "./API/Auth/index.js"
import Restaurant from './API/Restaurant/index.js'
import Food from './API/Food/index.js'
import Menu from './API/Menu/index.js'
import Image from './API/Image/index.js';
import Order from './API/Orders/index.js';
import Review from './API/Review/index.js';
import User from './API/User/index.js';

// Database Connection

import ConnectDB from './database/connection.js'

const app = express();
// Session setup
app.use(session({
    secret: 'zomato-app-mern', // A secret string to sign the session ID cookie
    resave: false,             // Don't save session if unmodified
    saveUninitialized: true,   // Save empty sessions
    cookie: { secure: false }  // Set to true in production if using HTTPS
}));


// application middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())

// passport config
GoogleAuthConfig(passport);
routeConfig(passport)

// application routes

app.use("/auth", Auth)
app.use("/restaurant",Restaurant)
app.use("/menu",Menu)
app.use("/food",Food)
app.use("/image",Image)
app.use("/order",Order)
app.use("/review",Review);
app.use("/user",User)

app.get("/", (req, res) => {
    return res.json({ message: "Setup done" })
})


app.listen((5000), () => ConnectDB().then(() => console.log(`Server running`)).catch(() =>
    console.log(`Server running but db connection failed !!!`)
))