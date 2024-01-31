import { create } from "zustand";

type User = {
  currentUser: userData | null;
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
  currentUser: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,

  save: (input) => {
    set({ currentUser: input });
    localStorage.setItem("user", JSON.stringify(input ? input : "null"));
  },
  remove: () => {
    set({ currentUser: null });
    localStorage.removeItem("user");
  },
}));
