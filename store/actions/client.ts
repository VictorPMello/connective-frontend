import { CreateClientSchema } from "@/lib/schemas/clientSchema";

import { ClientActions } from "@/types/client/clientActions";
import { ClientStateCreator } from "@/types/client/clientStateType";

import { generateId } from "@/utils/helpers";

export const CreateClientActions: ClientStateCreator<ClientActions> = (
  set,
) => ({
  createClient: (data) => {
    try {
      const validateClient = CreateClientSchema.parse(data);

      const newClient = {
        ...validateClient,
        id: generateId(),

        hiringDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      set((state) => ({ clients: [...state.clients, newClient] }));
    } catch (error) {
      throw new Error(`Error to create a client: ${error}`);
    }
  },

  updateClient: (data, id: string) => {
    try {
      set((state) => ({
        clients: state.clients.map((client) => {
          if (client.id === id) {
            return { ...client, ...data, updateAt: new Date() };
          }
          return client;
        }),
      }));
    } catch (error) {
      throw new Error(`Error to update a client: ${error}`);
    }
  },

  updateClientsOrder: (newOrder) => set({ clients: newOrder }),

  deleteClient: (id) => {
    try {
      set((state) => ({
        clients: state.clients.filter((client) => client.id !== id),
      }));
    } catch (error) {
      throw new Error(`Error to delete a client: ${error}`);
    }
  },

  deleteAllClients: () => {
    try {
      set(() => ({ clients: [] }));
    } catch (error) {
      throw new Error(`Error to delete all a clients: ${error}`);
    }
  },
});
