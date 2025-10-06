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
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      set((state) => ({ clients: [...state.clients, newClient] }));
    } catch (error) {
      throw new Error(`Error to create a client: ${error}`);
    }
  },
});
