// Libraries
import passport from "passport";
import express from "express";
import aws from 'aws-sdk';
import multer from 'multer';

// Database Model
import { ImageModel } from '../../database/allmodels';

const Router = express.Router();

// multer config

const storage = multer.memoryStorage();
const upload = multer({ storage })



// aws s3 bucket config
const s3bucket = new aws.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "us-east-1",
})


/*
Route    /
Des      upload given image to s3 bucket and saves link to mongodb
Access   Public
Params   None  
Method   Post
*/

Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;
        // s3 bucket options
        const bucketOptions = {
            Bucket: "anuj-zomato",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read",
        }

        // upload to aws s3
        const s3Upload = (options) => {
            return new Promise((resolve, reject) => s3bucket.upload(options, (error, data) => {
                if (error) return reject(error)
                return resolve(data)
            }))
        }

        const uploadImage = await s3Upload(bucketOptions);
        return res.status(200).json({ uploadImage });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})





export default Router;

