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
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { productName, category, qty, productId, image, price } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.productId === productId);

      if (existingItemIndex !== -1) {
        // Item already exists in the cart, increase quantity
        state.items[existingItemIndex].qty += qty;
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
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productIdToRemove = action.payload;
      const itemIndex = state.items.findIndex((item) => item.productId === productIdToRemove);

      if (itemIndex !== -1) {
        // Decrement the total quantity and remove the item
        state.totalQuantity -= state.items[itemIndex].qty;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
