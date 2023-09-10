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
  totalAmount: 0, // Initialize totalAmount to 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { productName, category, qty, productId, image, price } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.productId === productId); //find cart item // o 
    
      if (existingItemIndex !== -1) {  // if  value in item means except -1
        // Item already exists in the cart, increase quantity
        state.items[existingItemIndex].qty += qty;   // 0 == id_1  id_1.qty + 1
      } else {
        // Item doesn't exist in the cart, add it
        state.items.push({
          productName,
          category,
          qty,
          productId,
          image,
          price,
        });
      }
    
      // Update total quantity
      state.totalQuantity += qty;
    
      // Calculate total amount for all items in the cart
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.qty, 0);  // 10 * 2 =20
    },
    
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productIdToRemove = action.payload;
      const itemIndex = state.items.findIndex((item) => item.productId === productIdToRemove);

      if (itemIndex !== -1) {
        // Decrement the total quantity and remove the item
        state.totalQuantity -= state.items[itemIndex].qty;
        state.items.splice(itemIndex, 1);

        // Recalculate the total amount
        state.totalAmount = state.items.reduce((total, item) => total + item.price * item.qty, 0);
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0; // Clear the totalAmount when clearing the cart
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
