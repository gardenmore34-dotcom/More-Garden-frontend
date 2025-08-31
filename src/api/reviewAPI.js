import axios from 'axios';

const API_BASE_URL = 'https://more-garden-backend-2.onrender.com/api/review';

export const createReview = async (reviewData) => {
  const res = await axios.post(`${API_BASE_URL}/create`, reviewData);
  return res.data;
}

export const getProductReviews = async (productId) => {
  const res = await axios.get(`${API_BASE_URL}/product/${productId}`);
  return res.data;
}
export const deleteReview = async (reviewId) => {
  const res = await axios.delete(`${API_BASE_URL}/${reviewId}`);
  return res.data;
}   
