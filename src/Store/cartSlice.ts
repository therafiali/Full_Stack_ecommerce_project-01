import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  productId: string;
  productName: string;
  category: string;
  image: any;
  price: number;
  qty: number;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { productId, qty } = action.payload;
      const existingItem = state.items.find((item) => item.productId === productId);

      if (existingItem) {
        existingItem.qty += qty;
      } else {
        state.items.push(action.payload);
      }

      state.totalQuantity += qty;
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.qty, 0);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const productIdToRemove = action.payload;
      const itemIndex = state.items.findIndex((item) => item.productId === productIdToRemove);

      if (itemIndex !== -1) {
        const removedItem = state.items.splice(itemIndex, 1)[0];
        state.totalQuantity -= removedItem.qty;
        state.totalAmount = state.items.reduce((total, item) => total + item.price * item.qty, 0);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },

    updateCartItemQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.productId === productId);

      if (itemToUpdate) {
        itemToUpdate.qty = quantity;
        state.totalQuantity = state.items.reduce((total, item) => total + item.qty, 0);
        state.totalAmount = state.items.reduce((total, item) => total + item.price * item.qty, 0);
      }
    },
    
    addCart: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state.items.findIndex((item) => item.productId === action.payload.productId);
      
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
      
      state.totalQuantity += 1;
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.qty, 0);
    },
    
    subtractCart: (state, action) => {
      const { productId } = action.payload;
      const item = state.items.find((item) => item.productId === productId);
      
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1; // Decrement the quantity
          state.totalQuantity -= 1; // Update total quantity
          state.totalAmount -= item.price; // Update total amount
        } else {
          // If quantity is 1, remove the item from cart
          state.items = state.items.filter((item) => item.productId !== productId);
          state.totalQuantity -= 1; // Update total quantity
          state.totalAmount -= item.price; // Update total amount
        }
      }
    },
    
    delItem(state, { payload }) {
      const newState = {
        ...state,
        items: state.items.filter((val) => val.productId !== payload.productId),
      };
    
      // Recalculate total quantity and total amount
      newState.totalQuantity = newState.items.reduce((total, item) => total + item.qty, 0);
      newState.totalAmount = newState.items.reduce((total, item) => total + item.price * item.qty, 0);
    
      return newState;
    },
    
    
  },
});

export const { addToCart, removeFromCart, clearCart, updateCartItemQuantity, addCart, subtractCart,delItem } = cartSlice.actions;
export default cartSlice.reducer;
