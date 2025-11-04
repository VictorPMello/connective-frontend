import { StateCreator } from "zustand";

import { AccountState } from "@/types/account/accountState";
import { AccountActions } from "@/types/account/accountActions";

export type AccountStore = AccountState & AccountActions;

export type AccountStateCreator<T> = StateCreator<
  AccountStore,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  T
>;
