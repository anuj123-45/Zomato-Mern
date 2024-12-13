import aws from "aws-sdk";

import dotenv from 'dotenv'
dotenv.config()

// AWS S3 Bucket Config
const s3bucket = new aws.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "us-east-1", // Ensure this region matches your S3 bucket's region
});




// Function to upload to S3
export const s3Upload = (options) => {
    return new Promise((resolve, reject) => {
        s3bucket.upload(options, (error, data) => {
            if (error) {
                console.error("Error uploading to S3:", error); // Log the error for debugging
                return reject(error); // Reject the promise with the error
            }
            return resolve(data); // Resolve the promise with the S3 upload response
        });
    });
};
