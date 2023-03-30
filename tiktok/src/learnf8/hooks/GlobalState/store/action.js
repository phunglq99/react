export const setTodoInput = payload => {
    return {
        type: 'SET_TODO_INPUT',
        payload
    }
}

export const addTodoInput = payload => {
    return {
        type: 'ADD_TODO_INPUT',
        payload
    }
}

export const deleteTodoInput = payload => {
    return {
        type: 'DELETE_TODO_INPUT',
        payload
    }
}
