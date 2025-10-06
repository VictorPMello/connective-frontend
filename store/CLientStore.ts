import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { ClientStore } from "@/types/client/clientStateType";
import { CreateClientActions } from "@/store//actions/client";

export const useClientStore = create<ClientStore>()(
  devtools(
    persist(
      immer((...args) => ({
        clients: [],

        ...CreateClientActions(...args),
      })),
      { name: "client-store" },
    ),
    { name: "client-store" },
  ),
);
