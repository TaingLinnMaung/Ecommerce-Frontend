import axios from "axios";

function getAxiosClient() {
  const token = sessionStorage.getItem("TOKEN");
  const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Accept: "application/json",
    },
  });

  if (token) {
    axiosClient.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }

  return axiosClient;
}

export { getAxiosClient };
