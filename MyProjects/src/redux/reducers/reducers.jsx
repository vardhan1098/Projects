import { AddTodo,RemoveTodo } from "../action/actionType";


const initialState = {
    todos : []
}

const todoReducer =(state = initialState ,action) =>{
    switch (action.type) {
        case AddTodo:
            return {...state,
                todos:[...state.todos,action.payload]
            }

        case RemoveTodo:
            return{
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state;
    }
} 

export default todoReducer;