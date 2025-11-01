import { api } from "@/lib/api";
import { CreateClientSchema } from "@/lib/schemas/clientSchema";

import { ClientActions } from "@/types/client/clientActions";
import { ClientStateCreator } from "@/types/client/clientStateType";

import axios from "axios";

export const CreateClientActions: ClientStateCreator<ClientActions> = (
  set,
) => ({
  createClient: async (data) => {
    try {
      const validateClient = CreateClientSchema.parse(data);

      const userId = await api.get("/auth/me");

      const response = await api.post("/client", {
        ...validateClient,
        accountId: userId.data.userId,
      });

      set((state) => ({ clients: [...state.clients, response.data.data] }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Error to create a client: ${error.response?.data?.message || error.message}`,
        );
      }
      throw new Error(`Error to create a client: ${error}`);
    }
  },

  getClients: async (accountId: string) => {
    try {
      const response = await api.get(`/clients/${accountId}`);
      set({ clients: response.data.data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Error to fetch clients: ${error.response?.data?.message || error.message}`,
        );
      }
      throw new Error(`Error to fetch clients: ${error}`);
    }
  },

  updateClient: async (data, id: string) => {
    try {
      const response = await api.put(`/client/${id}`, data);

      set((state) => ({
        clients: state.clients.map((client) => {
          if (client.id === id) {
            return { ...client, ...response.data.data };
          }
          return client;
        }),
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Error to fetch clients: ${error.response?.data?.message || error.message}`,
        );
      }
      throw new Error(`Error to fetch clients: ${error}`);
    }
  },

  updateClientsOrder: (newOrder) => set({ clients: newOrder }),

  deleteClient: async (id) => {
    try {
      await api.delete(`/client/${id}`);
      set((state) => ({
        clients: state.clients.filter((client) => client.id !== id),
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Error to fetch clients: ${error.response?.data?.message || error.message}`,
        );
      }
      throw new Error(`Error to fetch clients: ${error}`);
    }
  },
});
