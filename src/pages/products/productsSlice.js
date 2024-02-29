import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProductAPI } from "@/api/products.api";
const initialState = {
  products: [],
  currentProduct: {
    id: "",
    product_image: "",
    name: "",
    description: "",
    is_fix_price: "",
    minium_price: "",
    seller: "",
  },
  addProductSuccess: null,
  // Multiple possible status enum values
  //   status: 'idle' | 'loading' | 'succeeded' | 'failed',
  status: "idle",
  //error: null | string
  error: null,
};

export const productsSlice = createSlice({
name: "products",
  initialState,
  reducers: {
    resetAddProductSuccess(state) {
      state.addProductSuccess = null;
    }
  },
  extraReducers(builder) {
    builder
    .addCase(addProduct.pending, (state) => {
      state.status = "loading";
    })
    .addCase(addProduct.fulfilled, (state) => {
      state.status = "succeeded";
      state.addProductSuccess = true;
      state.error = null;
    })
    .addCase(addProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      state.addProductSuccess = false;
    })
  },
});
//thunk
export const addProduct = createAsyncThunk("products/addProduct", async (productData) => {
  const response = await addProductAPI(productData) ;
  return response;
});

// reducer (action methods)
export const { resetAddProductSuccess } = productsSlice.actions;
// selector
export const selectCurrentProduct = state => state.products.currentProduct;
export const selectProductsError = state => state.products.error;
export const selectAddProductSuccess = state => state.products.addProductSuccess;

export default productsSlice.reducer;
