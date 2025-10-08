import { Client, CreateClient, UpdateClient } from "@/types/client/clientType";

export interface ClientActions {
  createClient: (data: CreateClient) => void;

  updateClient: (data: UpdateClient, id: string) => void;
  updateClientsOrder: (newOrder: Client[]) => void;

  deleteClient: (id: string) => void;
  deleteAllClients: () => void;
}
