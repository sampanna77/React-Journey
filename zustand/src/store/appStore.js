import {create} from "zustand"

 export const useAppstore = create((set) => (
    {
        //auth slice 
        user : {
           name : "sampanna" 
        },
        login: (user) => set({user}),
        logout : () => set({user: null}),


        //theme slice 
        theme : "light",
        toggle : () => set((state) => ({theme : state.theme === "light" ? "dark" : "light"}))
    }
)) 