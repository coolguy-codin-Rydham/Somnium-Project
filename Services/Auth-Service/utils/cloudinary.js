// Cloudinary api setup

import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
// import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from "./config";
config();
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (fileBuffer, originalFilename) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: "auto",
          filename_override: originalFilename,
        },
        (error, result) => {
          if (error) {
            console.error("Error uploading file to Cloudinary:", error);
            reject(error);
          } else if (result) {
            console.log("File uploaded to Cloudinary", result.url);
            resolve(result);
          } else {
            reject(new Error("Error uploading file to Cloudinary"));
          }
        },
      )
      .end(fileBuffer);
  });
};

export { uploadOnCloudinary };
