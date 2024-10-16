import { AddTodo, RemoveTodo,SetFilter,ToggleTodo,UpdateTodo } from "./actionType";


export const addTodo =(todo)=>({
    type : AddTodo,
    payload:todo
})

export const removeTodo = id =>({
    type :RemoveTodo,
    payload:id
})

export const updateTodo = (id,text) =>({
   type:UpdateTodo,
   payload:{id,text}
})

export const toogleTodo = id =>({
    type:ToggleTodo,
    payload:id
})

export const setFilter = filter =>({
    type:SetFilter,
    payload:filter
})