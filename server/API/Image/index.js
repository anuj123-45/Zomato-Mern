// Libraries
import dotenv from 'dotenv'
dotenv.config()
// Libraries
import passport from "passport";
import express from "express";
import aws from "aws-sdk";
import multer from "multer";

// Database Model
// import { ImageModel } from '../../database/allmodels';

const Router = express.Router();

// Multer config for handling file uploads in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// AWS S3 Bucket Config
const s3bucket = new aws.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "us-east-1", // Ensure this region matches your S3 bucket's region
});

/*
Route    / 
Des      Upload the given image to the S3 bucket and save the link to MongoDB 
Access   Public 
Params   None  
Method   Post
*/

Router.post("/", upload.single("file"), async (req, res) => {
    try {
        // Check if the file exists in the request
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const file = req.file;

        // Log the uploaded file for debugging purposes
        console.log("Received file:", file);

        // S3 bucket options
        const bucketOptions = {
            Bucket: "anuj-zomato", // Replace with your actual S3 bucket name
            Key: file.originalname, // File name in S3
            Body: file.buffer, // File data
            ContentType: file.mimetype, // Mime type of the file
            ACL:"public-read",
        };

        // Function to upload to S3
        const s3Upload = (options) => {
            return new Promise((resolve, reject) =>
                s3bucket.upload(options, (error, data) => {
                    if (error) {
                        console.error("Error uploading to S3:", error); // Log the error for debugging
                        return reject(error);
                    }
                    return resolve(data);
                })
            );
        };

        // Upload the file to S3
        const uploadImage = await s3Upload(bucketOptions);

        // Log the uploaded file data for debugging
        console.log("S3 upload successful:", uploadImage);

        // Respond with the uploaded image info (can save the URL to MongoDB here if needed)
        return res.status(200).json({ uploadImage });
    } catch (error) {
        // Log any unexpected errors
        console.error("Error in upload process:", error);
        return res.status(500).json({ error: error.message });
    }
});

export default Router;
