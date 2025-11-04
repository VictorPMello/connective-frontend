import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { AccountStore } from "@/types/account/accountStateType";
import { CreateAccountActions } from "./actions/account";

export const useAccountStore = create<AccountStore>()(
  devtools(
    persist(
      immer((...args) => ({
        account: {
          name: "",
          email: "",
        },

        ...CreateAccountActions(...args),
      })),
      { name: "account-store" },
    ),
    { name: "account-store" },
  ),
);
