import { create } from "zustand";

type User = {
  localUser: userData | null;
};
type userData = {
  email: string;
  profileImg?: string;
  username: string;
  userId: string;
};
type SaveActions = {
  save: (input: userData) => void;
  remove: () => void;
};

export const useSaveStore = create<User & SaveActions>((set) => ({
  localUser: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,

  save: (input) => {
    set({ localUser: input });
    localStorage.setItem("user", JSON.stringify(input ? input : "null"));
  },
  remove: () => {
    set({ localUser: null });
    localStorage.removeItem("user");
  },
}));
