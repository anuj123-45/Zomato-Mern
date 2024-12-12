// Libraries
import passport from "passport";
import express from "express";

// Database Model
import { FoodModel } from '../../database/allmodels.js';

const Router = express.Router();

/*
Route    /r
Des      get all food based on particular restaurant
Access   Public
Params   _id 
Method   Get
*/

Router.get("/r/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id })
        return res.json({ foods })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/*
Route    /c
Des      get all food based on particular category
Access   Public
Params   category
Method   Get
*/

Router.get("/c/:category", async (req, res) => {
    try {
        const {category} = req.params;
        const foods = await FoodModel.find({category:{$regex:category,$options:"i"}})
        return res.json({ foods })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router