import { api } from "@/lib/api";

export interface LoginResponse {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
    plan: string;
  };
  token: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    plan: string;
    maxProjects: number;
    maxClients: number;
  };
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  plan: string;
  maxProjects: number;
  maxClients: number;
}

export const UseAuth = {
  login: async (data: LoginData): Promise<LoginResponse> => {
    const response = await api.post("/auth/login", data);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post("/auth/logout");
  },

  getMe: async (): Promise<LoginResponse["user"]> => {
    const response = await api.get("/auth/me");
    return response.data;
  },

  register: async (data: RegisterData): Promise<RegisterResponse["data"]> => {
    const response = await api.post("/auth/register", data);
    return response.data;
  },
};
