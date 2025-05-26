import axios from "axios";

const API_BASE_URL = "https://devcase.isiksoftyazilim.com/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(
      "API isteğinde hata oluştu:",
      error.response || error.message
    );
    return Promise.reject(error);
  }
);

export default axiosInstance;
