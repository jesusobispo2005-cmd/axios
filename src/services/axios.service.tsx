import axios from "axios";

const api= axios.create({
    baseURL: "http://localhost:3000/api"
});

// "Middleware" de salida: Antes de que la petición se envíe
api.interceptors.request.use(
  (config) => {
    // Ejemplo: Añadir un token de autenticación automáticamente
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
    // Ejemplo: Si el servidor da 401, podrías redirigir al login
    if (error.response?.status === 401) {
      console.error("No autorizado");
    }
    return Promise.reject(error);
  },
);

export default api;