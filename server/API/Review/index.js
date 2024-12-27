// Libraries
import passport from "passport";
import express from "express";

// Database Model
import { ReviewModel } from '../../database/allmodels.js';
// validation
import { validateId,validateReviewData } from "../../Validation/review.js";

const Router = express.Router();

/*
Route    /new
Des      add new food review/rating
Access Public
Params   None
Body     reviewObject
Method   Post
*/

Router.post("/new", async (req, res) => {
    try {
        await validateReviewData(req.body)
        const { reviewData } = req.body;
        await ReviewModel.create(reviewData)
        return res.json({ review: "Succesfully created review" })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

})


/*
Route    /delete
Des     delete the review
Access Public
Params   _id
Body     None
Method   Delete
*/

Router.delete("/delete/:_id", async (req, res) => {
    try {
        await validateId(req.params);
        const { _id } = req.params;
        await ReviewModel.findByIdAndDelete(_id)
        return res.json({ review: "Review Successfully Deleted" })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router
