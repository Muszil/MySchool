// myschool/frontend/src/config/api.js
const API_CONFIG = {
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
    backendURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000',
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };
  
  // Cloudinary config
  export const CLOUDINARY_CONFIG = {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.REACT_APP_CLOUDINARY_API_KEY,
    apiSecret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
    uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
    uploadURL: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`
  };
  
  export default API_CONFIG;