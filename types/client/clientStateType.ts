import { StateCreator } from "zustand";

import { ClientActions } from "@/types/client/clientActions";
import { ClientState } from "@/types/client/clientState";

export type ClientStore = ClientState & ClientActions;

export type ClientStateCreator<T> = StateCreator<
  ClientStore,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  T
>;
