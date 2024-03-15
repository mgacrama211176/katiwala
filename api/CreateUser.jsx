import axios from "axios";

const API_URL = "https://katiwala-backend.onrender.com/api/users";
const API_URL_DEVELOPMENT = "http://localhost:3000/api/users";

export const createUser = async (newUser) => {
  try {
    const RegisterUser = await axios.post(`${API_URL}`, newUser, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    });
    console.log(RegisterUser);
  } catch (error) {
    console.log(error);
  }
};
