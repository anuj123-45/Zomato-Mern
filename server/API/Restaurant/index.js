// Libraries
import passport from "passport";
import express from "express";

// Database Model
import { RestaurantModel } from '../../database/allmodels.js';

// validation
import { validateRestaurantCity, validateRestaurantSearchString } from "../../Validation/restaurant.js";
import { validateRestaurantId } from "../../Validation/food.js";


const Router = express.Router();

/*
Route    /
Des      get all restaurants details based in city
Access   Public
Params   None  
Method   Get
*/
Router.get("/", async (req, res) => {
    try {
        await validateRestaurantCity(req.query)
        const { city } = req.query;
        const allRestaurants = await RestaurantModel.find({ city });
        return res.json({ allRestaurants })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


Router.post("/new", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const newRetaurant = await RestaurantModel.create(req.body.restaurantData);
        return res.json({ restaurants: newRetaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
Route    /
Des      get individual restaurants based on id
Access   Public
Params   id
Method   Get
*/

Router.get("/:_id", async (req, res) => {
    try {
        await validateRestaurantId(req.params)
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findById(_id);
        if (!restaurant) {
            return res.status(404).json({ error: "Restaurant not found" })
        }
        return res.json({ restaurant })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/*
Route    /
Des      get restaurant based on search string
Access   Public
Params   None
Body    saerch string
Method   Get
*/

Router.get("/search", async (req, res) => {
    try {
        await validateRestaurantSearchString(req.body)
        const { searchString } = req.body;
        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" },
        })
        if (!restaurants) {
            return res.status(404).json({ error: `No Restaurant matched with ${searchString}` })
        }
        return res.json({ restaurants })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router;
