// src/api/paymentAPI.js
import axios from 'axios';


const API_BASE_URL =  'https://more-garden-backend-2.onrender.com/api/payment';

export const createOrder = async (amount) => {
  const res = await axios.post(`${API_BASE_URL}/create-order`, { amount });
  return res.data;
};


export const verifyPayment = async ({ userId, orderId, amount, paymentData, cartItems }) => {
   

  const response = await axios.post(`${API_BASE_URL}/verify`, {
    userId,
    orderId,
    amount,
    paymentData,
    cartItems,
  });
  return response.data;
};

export const placeCODOrder = async ({ userId, cartItems, total }) => {
  console.log('frontend [1] placeCODOrder called with:', { userId, cartItems, total });
  
  const response = await axios.post(`${API_BASE_URL}/place-cod-order`, {
    userId,
    cartItems,
    totalAmount: total,
  });
  return response.data;
};
