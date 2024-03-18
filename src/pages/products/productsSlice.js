import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

import { getBestOrderByProductId } from "@/app/slice/ordersSlice";

import {
  addProductAPI,
  getAllProductsAPI,
  getProductByIdAPI,
  updateProductAPI,
  getProductBySellerIdAPI,
  addUserToWishlistAPI,
  removeUserToWishlistAPI,
  getWatchListAPI,
} from "@/api";

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
    time_closing: "",
    wish_list_of: "",
  },
  filter: null,
  sort: {sortType: "DESC", sortKind: "created"},
  // Process available: add-product, update-product
  currentProcess: null,
  displayOfferModal: false,
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
    resetCurrentProcess(state) {
      state.currentProcess = null;
    },
    toggleOfferModal(state) {
      state.displayOfferModal = !state.displayOfferModal;
    },
    updateSort(state, action) {
      state.sort = action.payload;
    },

    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addProduct.pending, (state) => {
        state.currentProcess = "add-product";
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = [action.payload, ...state.products];
        state.error = null;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(updateProduct.pending, (state) => {
        state.currentProcess = "update-product";
        state.status = "loading";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = [action.payload, ...state.products];
        state.error = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
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

      .addCase(getProductBySellerId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductBySellerId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getProductBySellerId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getWatchList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWatchList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getWatchList.rejected, (state, action) => {
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

      .addCase(addUserToWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUserToWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(addUserToWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(removeUserToWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeUserToWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = state.products.filter(product => product.id !== action.payload.id);
        state.error = null;
      })
      .addCase(removeUserToWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

  },
});

//thunk
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId) => {
    const response = await getProductByIdAPI(productId);
    return response;
  }
);

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async ({ filter, sort }) => {
    const response = await getAllProductsAPI(filter, sort);
    return response;
  }
);

export const getProductBySellerId = createAsyncThunk(
  "products/getProductBySellerId",
  async (sort) => {
    const response = await getProductBySellerIdAPI(sort);
    return response;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData) => {
    const response = await addProductAPI(productData);
    return response;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ productId, updateData }) => {
    const response = await updateProductAPI(productId, updateData);
    return response;
  }
);

export const addUserToWishlist = createAsyncThunk(
  "products/addUserToWishlist",
  async ({ productId, userId, wishListOf }) => {
    const response = await addUserToWishlistAPI(productId, userId, wishListOf);
    return response;
  }
);

export const removeUserToWishlist = createAsyncThunk(
  "products/removeUserToWishlist",
  async ({ productId, userId }) => {
    const response = await removeUserToWishlistAPI(productId, userId);
    return response;
  }
);


export const getWatchList = createAsyncThunk(
  "products/getWatchList",
  async (userId) => {
    const response = await getWatchListAPI(userId);
    return response;
  }
);

// action
export const getFullCurrentProduct = (productId) => {
  return (dispatch) => {
    dispatch(getProductById(productId));
    dispatch(getBestOrderByProductId(productId));
  };
};

// reducer (action methods)
export const {
  resetCurrentProcess,
  toggleOfferModal,
  updateFilter,
  updateSort,
} = productsSlice.actions;
// selector
export const selectCurrentProduct = (state) => state.products.currentProduct;
export const selectProducts = (state) => state.products.products;
export const selectProductsError = (state) => state.products.error;
export const selectAddProductSuccess = (state) =>
  state.products.addProductSuccess;
export const selectDisplayOfferModal = (state) =>
  state.products.displayOfferModal;

export const selectProductFilter = (state) => state.products.filter;
export const selectProductSort = (state) => state.products.sort;

export const selectStatus = (state) => state.products.status;
export const selectCurrentProcess = (state) => state.products.currentProcess;

export const selectProductStatus = createSelector(
  selectStatus,
  selectCurrentProcess,
  (status, currentProcess) => {
    return {
      status,
      currentProcess,
    };
  }
);

export default productsSlice.reducer;
