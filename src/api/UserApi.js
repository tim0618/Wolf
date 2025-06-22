import axios from "axios";
const apiUrl = "http://localhost:5090/api/User";

export const login = async (account, password) => {
  const response = await axios.post(`${apiUrl}/Login`, {
    account,
    password,
  });
  return response.data;
};
