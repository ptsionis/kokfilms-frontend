import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development" ? "http://localhost:3000" : "";

const fetchMediaUrls = async (media, category) => {
  try {
    const response = await axios.get(`${baseURL}/api/${media}/${category}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchYouTubeInfo = async (category) => {
  try {
    const response = await axios.get(`${baseURL}/api/youtube/${category}`);
    return response.data.embedCodes;
  } catch (error) {
    console.log(error);
  }
};

const submitForm = async (fullName, email, message, token) => {
  try {
    const response = await axios.post(`${baseURL}/api/submit`, {
      fullName,
      email,
      message,
      token,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchMediaUrls, fetchYouTubeInfo, submitForm };
