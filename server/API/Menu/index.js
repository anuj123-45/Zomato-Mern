// Libraries
import passport from "passport";
import express from "express";

// Database Model
import { ImageModel, MenuModel } from '../../database/allmodels.js';

// validation
import { validateMenuAndImageId } from "../../Validation/menu.js";

const Router = express.Router();

/*
Route    /list
Des      get all list menu based on id
Access Public
Params   None  
Method   Get
*/

Router.get("/list/:_id", async (req, res) => {
    try {
        await validateMenuAndImageId(req.params)
        const { _id } = req.params;
        const menus = await MenuModel.findById(_id);
        return res.json({ menus })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/*
Route    /images
Des      get all  menu images based on id
Access Public
Params   None  
Method   Get
*/

Router.get("/image/:_id", async (req, res) => {
    try {
        await validateMenuAndImageId(req.params)
        const { _id } = req.params;
        const menus = await ImageModel.findById(_id);
        return res.json({ menus })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router