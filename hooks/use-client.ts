import { useClientStore } from "@/store/CLientStore";

export const UseClient = () => {
  const clients = useClientStore((state) => state.clients);

  const createClient = useClientStore((state) => state.createClient);
  const updateClient = useClientStore((state) => state.updateClient);

  const deleteCLient = useClientStore((state) => state.deleteClient);
  const deleteAllClients = useClientStore((state) => state.deleteAllClients);

  return {
    clients,
    createClient,
    updateClient,
    deleteCLient,
    deleteAllClients,
  };
};
