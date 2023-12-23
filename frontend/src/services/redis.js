import { API } from "./config";

const addRedis = async (id) => {
  const response = await API.post(`/redis/${id}`);
  return response.data;
};

const getRedis = async (id) => {
  const response = await API.get(`/redis/${id}`);
  return response.data;
};

const deleteRedis = async (id) => {
  const response = await API.delete(`/redis/${id}`);
  return response.data;
};

export { addRedis, getRedis, deleteRedis };
