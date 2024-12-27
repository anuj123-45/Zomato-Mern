

// Libraries
import passport from "passport";


import express from "express";
import multer from "multer";
import { s3Upload } from '../../Utils/AWS/s3.js';

// validation 
import { validateImage } from "../../Validation/image.js";

const Router = express.Router();

// Multer config for handling file uploads in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });




/*
Route    / 
Des      Upload the given image to the S3 bucket and save the link to MongoDB 
Access   Public 
Params   None  
Method   Post
*/

Router.post("/", upload.single("file"), async (req, res) => {
    try {
       

        const file = req.file;
        await validateImage(file)

        // Log the uploaded file for debugging purposes
        console.log("Received file:", file);

        // S3 bucket options
        const bucketOptions = {
            Bucket: "anuj-zomato", // Replace with your actual S3 bucket name
            Body: file.buffer, // File data
            Key: file.originalname, // File name in S3
            ContentType: file.mimetype, // Mime type of the file
            ACL:"public-read",
        };

        // Upload the file to S3
        const uploadImage = await s3Upload(bucketOptions);

        // Log the uploaded file data for debugging
        console.log("S3 upload successful:", uploadImage);

        // Respond with the uploaded image info (can save the URL to MongoDB here if needed)
        return res.status(200).json({ uploadImage });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;