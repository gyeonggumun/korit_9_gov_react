import { create } from "zustand";

// const useName = create();
export const useName = create((set) => ({
    name: "",
    setName: (name) => set({"name": name}),
}));

export const useUserInfo = create((set) => ({
    userInfo: {
        username: "",
        email: "",
        phone: "", 
    },
    setUserInfo: (user) => set({userInfo: user}),
}))