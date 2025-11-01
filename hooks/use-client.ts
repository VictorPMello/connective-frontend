import { useClientStore } from "@/store/CLientStore";

export const UseClient = () => {
  const clients = useClientStore((state) => state.clients);
  const createClient = useClientStore((state) => state.createClient);

  const getClients = useClientStore((state) => state.getClients);
  const updateClient = useClientStore((state) => state.updateClient);
  const updateClientsOrder = useClientStore(
    (state) => state.updateClientsOrder,
  );

  const deleteCLient = useClientStore((state) => state.deleteClient);

  return {
    clients,
    createClient,

    getClients,
    updateClient,
    updateClientsOrder,
    deleteCLient,
  };
};
