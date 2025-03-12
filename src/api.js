import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const searchMovie = async (q) => {
  try {
    const response = await axios.get(`${baseUrl}?t=${q}&apikey=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return { Response: "False", Error: "Failed to fetch data" };
  }
};