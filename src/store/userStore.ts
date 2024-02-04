import axios from "axios";
import { create } from "zustand";

type UserData = {
  id: string;
  email: string;
  profileImg: string;
  username: string;
};

type UserState = {
  currentUser: UserData | null;
};

type UserActions = {
  fetchUser: () => Promise<void>;
};

export const useFetchUserStore = create<UserState & UserActions>((set) => ({
  currentUser: null,

  fetchUser: async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user/user", {
        withCredentials: true,
      });

      set({
        currentUser: res.data,
      });
    } catch (error:unknown) {
      console.log(error);
    }
  },
}));
