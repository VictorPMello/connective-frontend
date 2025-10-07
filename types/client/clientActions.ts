import { CreateClient } from "@/types/client/clientType";

export interface ClientActions {
  createClient: (data: CreateClient) => void;
  updateClient: (data: CreateClient) => void;
  deleteClient: (id: string) => void;
  deleteAllClients: () => void;
}
