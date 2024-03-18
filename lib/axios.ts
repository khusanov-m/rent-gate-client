import axios from "axios";

// "https://rent-gate-api.onrender.com/api/v1"
// "http://localhost:8000"

const BASE =
  "http://localhost:9000/api/v1" || "https://rent-gate-api.onrender.com/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem("token");
      if (token) config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);
// End of Request interceptor
// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response;
  },
  (error) => {
    // Handle response errors here

    return Promise.reject(error);
  }
);
// End of Response interceptor

export default axiosInstance;
