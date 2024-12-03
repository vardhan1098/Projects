import { ADD_TODO } from "../Actions/Action"


let initialState = {
    todos:[]
}
function reducer(state = initialState,action){
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,todos:[...state.todos,action.payload]
            }
      
        default:
            return state
    }
}

export default reducer