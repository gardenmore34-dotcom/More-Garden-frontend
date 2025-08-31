import axios from "axios";

const API_BASE_URL = "https://more-garden-backend-2.onrender.com/api/orders";

export const getUserOrders = async (userId) => {
  const res = await axios.get(`${API_BASE_URL}/get/${userId}`);
  return res;
};

export const getAllOrders = async (range) => {
  const res = await axios.get(`${API_BASE_URL}/admin/orders`, {
    params: { range },
  });
  return res.data;
};