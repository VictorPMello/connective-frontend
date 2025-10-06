import { useClientStore } from "@/store/CLientStore";

export const UseClient = () => {
  const clients = useClientStore((state) => state.clients);
  const createClient = useClientStore((state) => state.createClient);

  return { clients, createClient };
};
