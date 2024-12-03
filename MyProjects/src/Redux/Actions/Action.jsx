export const ADD_TODO = "add_Todo";
export const DECREMENT = "decrement";
export const RESET = "reset";


export const addTodo = (todo) =>{
    return {
        type: ADD_TODO,
        payload:todo
    }
}

export const decrement = () =>{
    return {
        type:DECREMENT
    }
}

export const reset = () =>{
    return {
        type:RESET
    }
}