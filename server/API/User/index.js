// Libraries
import passport from "passport";
import express from "express";

// Database Model
import { UserModel } from '../../database/allmodels.js';

// Validation
import { validateUserId,validateUserData } from "../../Validation/user.js";

const Router = express.Router();

/*
Route    /:_id
Des      get user data
Access Public
Params   _id
Body     None
Method   Get
*/

Router.get("/:_id", async (req, res) => {
    try {
        await validateUserId(req.params);    
        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);
        return res.json({ user: getUser })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

})


/*
Route    /update/:_id
Des      update user data
Access Public
Params   _id
Body     user data
Method   Put
*/
Router.put("/update/:_id", async (req, res) => {
    try {
        await validateUserId(req.params)
        await validateUserData(req.body)
        const { _id } = req.params;
        const { userData } = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(_id, {
            $set: userData
        },
            {
                new: true
            })
        return res.json({ user: updateUserData })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

})


export default Router;
