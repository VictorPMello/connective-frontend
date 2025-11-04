interface SetAccountTypes {
  name: string;
  email: string;
}

export interface AccountActions {
  setAccount: (account: SetAccountTypes) => void;
  deleteAccount: () => void;
}
