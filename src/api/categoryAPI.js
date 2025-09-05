// api/categoryAPI.js
import axios from 'axios';


const API_BASE_URL = (import.meta.env.VITE_BACKEND_URL ) + "/api/categories";
console.log('API_BASE_URL:', API_BASE_URL);


export const getAllCategories = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
};
