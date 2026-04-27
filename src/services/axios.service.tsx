import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// "Middleware" de salida: Antes de que la petición se envíe
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Petición enviada a:", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// "Middleware" de entrada: Al recibir la respuesta
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Si el servidor da 401, redirigir al login
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      // Usar window.location para navegar (compatible con React Router)
      window.location.href = "/login";
      console.error("No autorizado");
    }
    return Promise.reject(error);
  },
);

export default api;