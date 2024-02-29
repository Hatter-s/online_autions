import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCategoryAPI, getAllCategoriesAPI } from "@/api/categories.api";
const initialState = {
  categories: [],
  // Multiple possible status enum values

  //   status: 'idle' | 'loading' | 'succeeded' | 'failed',
  status: "idle",
  //error: null | string
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = [ ...state.categories, action.payload];
        state.error = null;
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getAllCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
//thunk
export const addCategory = createAsyncThunk(
  "products/addCategory",
  async (productData) => {
    const response = await addCategoryAPI(productData);
    return response;
  }
);

export const getAllCategories = createAsyncThunk(
  "products/getAllCategories",
  async (productData) => {
    const response = await getAllCategoriesAPI(productData);
    const categories = response.map((category) => category.name);

    return categories;
  }
);
// reducer (action methods)

// selector
export const selectAllCategories = (state) => state.categories.categories;
export const selectProductsError = (state) => state.categories.error;

export default categoriesSlice.reducer;
