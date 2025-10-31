import { useAccountStore } from "@/store/AccountStore";

export const useAccount = () => {
  const account = useAccountStore((state) => state.account);
  const setAccount = useAccountStore((state) => state.setAccount);
  const deleteAccount = useAccountStore((state) => state.deleteAccount);

  return {
    account,
    setAccount,
    deleteAccount,
  };
};
