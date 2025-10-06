import { CreateClient } from "@/types/client/clientType";

export interface ClientActions {
  createClient: (data: CreateClient) => void;
}
