import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentValue : 0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        handleIncreaseCountAction:() =>{
        
        }
    }
})

export const {handleIncreaseCountAction} = counterSlice.actions;

export default counterSlice.reducer