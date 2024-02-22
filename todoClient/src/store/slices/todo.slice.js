import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoList",
    initialState:{
        data: null
    },
    reducers:{
        setData: (state, action)=>{
            state.data = action.payload
        },
        addTodo: (state, action)=>{
            state.data.push(action.payload)
        }
    }
})

export const todoReducer = todoSlice.reducer;
export const todoAction = todoSlice.actions