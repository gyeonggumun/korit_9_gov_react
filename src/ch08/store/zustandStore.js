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
    setUserInfo2: (ket, value) => set(state => ({userInfo: {...state.userInfo, [ket]: value,}})),
}))

export const useUserInfoList = create((set) => ({
    userInfoList: [],
    setUserInfoList: (user) => set((state) => ({userInfoList: [...state.userInfoList, user]})), 
}))