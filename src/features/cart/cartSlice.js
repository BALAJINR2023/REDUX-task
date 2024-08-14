import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const findItemIndex = (cart, productId) => {
  return cart.findIndex(item => item.id === productId);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = findItemIndex(state.cart, action.payload.id);
      if (index !== -1) {
        state.cart[index].quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const index = findItemIndex(state.cart, action.payload);
      if (index !== -1) {
        state.cart[index].quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const index = findItemIndex(state.cart, action.payload);
      if (index !== -1 && state.cart[index].quantity > 0) {
        state.cart[index].quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

export const getTotalAmount = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity * item.price, 0);
