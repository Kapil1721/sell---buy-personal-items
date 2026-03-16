import { create } from "zustand";
import {devtools, persist } from "zustand/middleware";
const token = localStorage.getItem("_sell_Token");
const _token = token ? true : false;

// console.log(_token,"token");

export const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        // loggedIn: token ? true : false,
        authorised: false,
        userData: null,
        setUserData: (userData) => set({ userData }),
        authorise: () => set({ authorised: true }),
        unauthorise: () => set({ authorised: false }),
      }),
      {
        name: "user",
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) => !["loggedIn", "authorised"].includes(key)
            )
          ),
      }
    )
  )
);

export const useGlobalState = create(
  devtools((set) => ({
    loggedIn: _token,
    loading: false,
    error: false,
    login: () => {
      set(() => ({ loggedIn: true }));
    },
    logout: () => {
      localStorage.removeItem('_sell_Token')
      set({ loggedIn: false });
    },
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
  }))
);
