import express from 'express'

//Models
import {UserModel} from '../../database/allmodels.js'

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
         await UserModel.findByEmailAndPhone(req.body.credentials)

        const newUser=await UserModel.create(req.body.credentials)

        const token= await newUser.generateToken();

        return res.status(200).json({token,status:"Success"})        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})






export default Router;