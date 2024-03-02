import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProductAPI,getAllProductsAPI, getProductByIdAPI } from "@/api";
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
    category: "",
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
    .addCase(addProduct.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.addProductSuccess = true;
      state.products = [ ...state.products, action.payload ];
      state.error = null;
    })
    .addCase(addProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      state.addProductSuccess = false;
    })

    .addCase(getAllProducts.pending, (state) => {
      state.status = "loading";
    })
    .addCase(getAllProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
      state.error = null;
    })
    .addCase(getAllProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })

    .addCase(getProductById.pending, (state) => {
      state.status = "loading";
    })
    .addCase(getProductById.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.currentProduct = action.payload;
      state.error = null;
    })
    .addCase(getProductById.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
  },
});
//thunk
export const getProductById = createAsyncThunk("products/getProductById", async (productId) => {
  const response = await getProductByIdAPI(productId) ;
  return response;
});

export const getAllProducts = createAsyncThunk("products/getAllProducts", async (sort) => {
  const response = await getAllProductsAPI(sort) ;
  return response;
});

export const addProduct = createAsyncThunk("products/addProduct", async (productData) => {
  const response = await addProductAPI(productData) ;
  return response;
});

// reducer (action methods)
export const { resetAddProductSuccess } = productsSlice.actions;
// selector
export const selectCurrentProduct = state => state.products.currentProduct;
export const selectProducts = state => state.products.products;
export const selectProductsError = state => state.products.error;
export const selectAddProductSuccess = state => state.products.addProductSuccess;

export default productsSlice.reducer;
