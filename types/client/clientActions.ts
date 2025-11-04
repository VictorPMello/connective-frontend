import { Client, CreateClient, UpdateClient } from "@/types/client/clientType";

export interface ClientActions {
  createClient: (data: CreateClient) => Promise<void>;

  getClients: (accountId: string) => Promise<void>;

  updateClient: (data: UpdateClient, id: string) => Promise<void>;
  updateClientsOrder: (newOrder: Client[]) => void;

  deleteClient: (id: string) => Promise<void>;
}
