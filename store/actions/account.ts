import { AccountActions } from "@/types/account/accountActions";
import { AccountStateCreator } from "@/types/account/accountStateType";

export const CreateAccountActions: AccountStateCreator<AccountActions> = (
  set,
) => ({
  setAccount: (account) => {
    try {
      set({
        account: { name: account.name, email: account.email },
      });
    } catch (error) {
      throw new Error(`Error to set account: ${error}`);
    }
  },

  deleteAccount: () => {
    try {
      set({
        account: {
          name: "",
          email: "",
        },
      });
    } catch (error) {
      throw new Error(`Error to delete a client: ${error}`);
    }
  },
});
