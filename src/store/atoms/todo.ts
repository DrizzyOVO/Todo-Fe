import { atom } from "recoil"; 

export interface Todo { 
    _id?: String | undefined, 
    title: String, 
    done: Boolean, 
    userId?: String, 
}

export const todoState = atom<Todo[]>({ 
    key: 'todoState', 
    default: [] 
}); 

// export interface todo { 
//     isLoading: Boolean, 
//     todo: {
//         title: String, 
//         description: String, 
//         done: Boolean
//     } | null   
// }

// export const todoState = atom<todo>({ 
//     key: 'todoState', 
//     default: {
//         isLoading: true, 
//         todo: null 
//     },   
// }); 
