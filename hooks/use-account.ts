import { useAccountStore } from "@/store/AccountStore";

export const useAccount = () => {
  const account = useAccountStore((state) => state.account);

  const deleteAccount = useAccountStore((state) => state.deleteAccount);

  return {
    account,
    deleteAccount,
  };
};
