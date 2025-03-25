import { v2 as cloudinary } from "cloudinary";

// Check if environment variables are set
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo';
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

// Configure cloudinary with fallbacks for development
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey || 'placeholder',
  api_secret: apiSecret || 'placeholder',
});

export default cloudinary;
