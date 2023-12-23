import { API } from "./config";

const addUser = async (name) => {
  const response = await API.post("/users", { name });
  return response.data;
};

const getUsers = async () => {
  const response = await API.get("/users");
  return response.data;
};

const deleteUser = async (id) => {
  const response = await API.delete(`/users/${id}`);
  return response.data;
};

export { addUser, getUsers, deleteUser };
