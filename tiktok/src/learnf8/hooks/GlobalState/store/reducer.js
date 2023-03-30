import { ADD_TODO_INPUT, DELETE_TODO_INPUT, SET_TODO_INPUT } from "./constants";

const initState = {
    todo:[],
    todoInput: ''
}

const reducer = (state, action) => {
    switch(action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        // case DELETE_TODO_INPUT:
        //     const newListTodo = [...state.todo],

            

        //     return {
        //         ...state,
        //     }
        default:
            throw new Error('Invalid action', action)
    }
}

export { initState }
export default reducer;