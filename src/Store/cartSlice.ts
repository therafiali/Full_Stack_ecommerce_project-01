"use client";
import {PayloadAction, createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state:any,{payload}){
            // console.log('add running')
            state.push(payload)
        },
        remove(state,action){
            return state.filter((item:any)=>item.id !== action.payload);
        }
    }
})

export const {add,remove} =cartSlice.actions;
export default cartSlice.reducer;