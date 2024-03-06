import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import {
  addOrderAPI,
  // getAllProductsAPI,
  // getProductByIdAPI,
  // updateProductAPI,
} from "@/api";

const initialState = {
  sellerOrders: [],
  userOrders: [],
  currentOrder: {
    id: "",
    created: "",
    updated: "",
    buyer_id: "",
    seller_id: "",
    product_id: "",
    offer_price: 0,
    is_fix_price: false,
    is_accept: false,
  },
  // Process available: add-order, update-order
  currentProcess: null,
  displayOfferModal: false,
  // Multiple possible status enum values
  //   status: 'idle' | 'loading' | 'succeeded' | 'failed',
  status: "idle",
  //error: null | string
  error: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    resetOrdersCurrentProcess(state) {
      state.currentProcess = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addOrder.pending, (state) => {
        state.currentProcess = "add-order";
        state.status = "loading";
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userOrders = [action.payload, ...state.userOrders];
        state.error = null;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // .addCase(updateProduct.pending, (state) => {
      //   state.currentProcess = "update-product";
      //   state.status = "loading";
      // })
      // .addCase(updateProduct.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.products = [action.payload, ...state.products];
      //   state.error = null;
      // })
      // .addCase(updateProduct.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error.message;
      // })

      // .addCase(getAllProducts.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(getAllProducts.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.products = action.payload;
      //   state.error = null;
      // })
      // .addCase(getAllProducts.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error.message;
      // })

      // .addCase(getProductById.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(getProductById.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.currentProduct = action.payload;
      //   state.error = null;
      // })
      // .addCase(getProductById.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error.message;
      // });
  },
});

//thunk
// export const getProductById = createAsyncThunk(
//   "products/getProductById",
//   async (productId) => {
//     const response = await getProductByIdAPI(productId);
//     return response;
//   }
// );

// export const getAllProducts = createAsyncThunk(
//   "products/getAllProducts",
//   async (sort) => {
//     const response = await getAllProductsAPI(sort);
//     return response;
//   }
// );

export const addOrder = createAsyncThunk(
  "orders/addOrder",
  async (productData) => {
    const response = await addOrderAPI(productData);
    return response;
  }
);

// export const updateProduct = createAsyncThunk(
//   "products/updateProduct",
//   async ({ productId, updateData }) => {
//     const response = await updateProductAPI(productId, updateData);
//     return response;
//   }
// );

// reducer (action methods)
export const { resetOrdersCurrentProcess } = ordersSlice.actions;

// selector
export const selectCurrentOrder = (state) => state.orders.currentProduct;
export const selectSellerOrders = (state) => state.orders.sellerOrders;
export const selectUserOrders = (state) => state.orders.sellerUsers;
export const selectOrdersError = (state) => state.orders.error;

export const selectStatus = (state) => state.orders.status;
export const selectCurrentProcess = (state) => state.orders.currentProcess;

export const selectOrderStatus = createSelector(
  selectStatus,
  selectCurrentProcess,
  (status, currentProcess) => {
    return {
      status,
      currentProcess,
    };
  }
);

export default ordersSlice.reducer;
