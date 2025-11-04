import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const message = error.response.data?.message || "Erro no servidor";
      console.error("Erro da API:", message);
      return Promise.reject(new Error(message));
    } else if (error.request) {
      console.error("Sem resposta do servidor");
      return Promise.reject(new Error("Sem resposta do servidor"));
    } else {
      console.error("Erro:", error.message);
      return Promise.reject(error);
    }
  },
);
