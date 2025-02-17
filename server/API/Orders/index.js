// Libraries
import passport from "passport";
import express from "express";

// Database Model
import { OrderModel } from '../../database/allmodels.js';

// validation

import { validateId,validateOrderDetails } from "../../Validation/order.js";

const Router = express.Router();

/*
Route    /
Des      get all orders based on id 
Access Public
Params   _id
Method   Get
*/

Router.get("/:_id", passport.authenticate("jwt", { session: false }), async (req, res) => {
   
    try {
        await validateId(req.params)
        const { _id } = req.params;
        const getAllOrders = await OrderModel.findOne({ user: _id })
        if (!getAllOrders) {
            return res.status(404).json({ error: "User not found" })
        }
        else {
            return res.status(200).json({ orders: getAllOrders })
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/*
Route    /new 
Des      add new order
Access Public
Params   _id
Method   Post
*/

Router.post("/new/:_id", async (req, res) => {
    try {
        await validateId(req.params);
        await validateOrderDetails(req.body);
        const { _id } = req.params;
        const { orderDetails } = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate({
            user: _id
        },
            {
                $push: {
                    orderDetails
                },
            },
            {
                new: true
            }
        )

        return res.json({ order: addNewOrder })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router;