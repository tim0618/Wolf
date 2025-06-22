import axios from "axios";

const apiUrl = "http://localhost:5090/api/GameRoom";

export const creatGameRoom = async () => {
  const response = await axios.post(`${apiUrl}/CreateGameRoom`);
  return response.data;
};
