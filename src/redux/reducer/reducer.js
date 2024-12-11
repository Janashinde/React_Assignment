import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [], // Stores the list of products
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    updateProduct(state, action) {
      const { id, product } = action.payload;
      state.products[id] = product;
    },
    deleteProduct(state, action) {
      state.products.splice(action.payload, 1);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
