import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  name:string;
  category:string;
  qty:number;
}

const initialState: CartState[] = []

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state,{payload}) => {
      state.push(payload)},
    removeFromCart: (state,actions:PayloadAction<any>) => {
     
    },
    clearCart: (state, action: PayloadAction<number>) => {
      state=initialState
    },
  },
});

export const  {addToCart,removeFromCart,clearCart}=cartSlice.actions
export const  cartActions = cartSlice.actions
export default cartSlice.reducer