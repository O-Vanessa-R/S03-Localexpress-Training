import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductInCart } from "../../../@types/products";

export interface CartState {
  products: ProductInCart[];
}

export const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductInCart>) => {
      state.products.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    increment: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload) {
          product.quantity += 1;
        }

        return product;
      });
    },
    quantity: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = action.payload.qty;
        }

        return product;
      });
    },
    empty: (state) => {
      state.products = [];
    },
  },
});

export const { add, increment, remove, quantity, empty } = cartSlice.actions;

// Pas obligatoire d'export default
export default cartSlice.reducer;
