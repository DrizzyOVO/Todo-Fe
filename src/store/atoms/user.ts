import { atom } from "recoil"; 

export interface user { 
    isLoading: Boolean, 
    userEmail: String | null 
}

export const userState = atom<user>({  
    key: 'userState', 
    default: {
        isLoading: true, 
        userEmail: null 
    }, 
}); 

