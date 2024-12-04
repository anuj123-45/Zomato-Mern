import express from 'express'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//Models
import {UserModel} from '../../database/user'

const Router = express.Router();


/*
Route    /signup
Des      signup with email and password
Access   Public
Params   None  
Method   POST
*/

Router.post("/signup",async(req,res)=>{
    try {
        const {email,password,fullName,phoneNumber}=req.body.credentials;

        // check whether email or phoneno exist
        const checkUserByEmail=await UserModel.findOne({email})
        const checkUserByPhoneno=await UserModel.findOne({phoneNumber})

        if(checkUserByEmail || checkUserByPhoneno){
            return res.json({error:"User Already Exists !"})
        }

        // hash the password

        const bcryptSalt=await bcrypt.genSalt(8);
        const hashPassword=await bcrypt.hash(password,bcryptSalt)

        // save to DB

        await UserModel.create({...req.body.credentials,password:hashPassword})

        // generate JWT  auth token
        const token=jwt.sign({user:{email,fullName}},"ZomatoApp")


        //return
        return res.status(200).json({token,status:"Success"})

        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})











export default Router;