// api/categoryAPI.js
import axios from 'axios';

const API_BASE_URL = 'https://more-garden-backend-2.onrender.com/api/categories/';


export const getAllCategories = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
};
