import { todoState } from "../atoms/todo"; 
import { selector } from "recoil"; 
import { userState } from "../atoms/user"; 

// export const isTodoLoading = selector({ 
//     key: 'isTodoLoadingState', 
//     get: ({get}) => {
//         const state = get(todoState); 
//         return state.isLoading; 
//     }, 
// }); 

export const todoDetails = selector({ 
    key: 'todoDetailsState', 
    get: ({get}) => ({
        total: get(todoState).length, 
        recoilTodos: get(todoState).map((todo) => console.log(todo)), 
    }), 
}); 

// export const todoDetails = selector({ 
//     key: 'todoDetailsState', 
//     get: ({get}) => {
//         const state = get(todoState); 
//         return state.map((todo) => {
//             return todo 
//         })
//     }, 
// }); 

// export const todoTitle = selector({ 
//     key: 'todoTitleState',  
//     get: ({get}) => {
//         const state = get(todoState); 
//         if(state.todo) { 
//             return state.todo.title; 
//         }
//         return ""; 
//     },  
// }); 

// export const todoDescription = selector({ 
//     key: 'todoTitleState', 
//     get: ({get}) => {
//         const state = get(todoState); 
//         if(state.todo){
//             return state.todo.description 
//         }
//         return ""; 
//     }, 
// }); 


// export const todoDone = selector({ 
//     key: 'todoDoneState', 
//     get: ({get}) => {
//         const state = get(todoState); 
//         if(state.todo) { 
//             return state.todo.done 
//         }
//         return ""; 
//     }, 
// }); 

