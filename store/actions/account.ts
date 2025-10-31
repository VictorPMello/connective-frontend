import { AccountActions } from "@/types/account/accountActions";
import { AccountStateCreator } from "@/types/account/accountStateType";

export const CreateAccountActions: AccountStateCreator<AccountActions> = (
  set,
) => ({
  deleteAccount: () => {
    try {
      set({
        account: {
          name: null,
          email: null,
        },
      });
    } catch (error) {
      throw new Error(`Error to delete a client: ${error}`);
    }
  },
});
