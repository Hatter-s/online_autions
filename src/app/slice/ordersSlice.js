import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import {
  addOrderAPI,
  getOrdersBySellerIdAPI,
  getOrdersByBuyerIdAPI,
  getOrderByProductIdAPI
} from "@/api";

const initialState = {
  sellerOrders: [],
  buyerOrders: [],
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
    buyer_name: "",
    seller_name: "",
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
        state.buyerOrders = [action.payload, ...state.buyerOrders];

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

      .addCase(getOrdersBySellerId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrdersBySellerId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.sellerOrders = action.payload;
        state.error = null;
      })
      .addCase(getOrdersBySellerId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getOrdersByBuyerId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrdersByBuyerId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.buyerOrders = action.payload;
        state.error = null;
      })
      .addCase(getOrdersByBuyerId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getOrderByProductId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrderByProductId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentOrder = action.payload;
        state.error = null;
      })
      .addCase(getOrderByProductId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//thunk
export const getOrdersBySellerId = createAsyncThunk(
  "orders/getOrdersBySellerId",
  async (sellerId) => {
    const response = await getOrdersBySellerIdAPI(sellerId);
    return response;
  }
);

export const getOrdersByBuyerId = createAsyncThunk(
  "orders/getOrdersByBuyerId",
  async (buyerId) => {
    const response = await getOrdersByBuyerIdAPI(buyerId);
    return response;
  }
);

export const getOrderByProductId = createAsyncThunk(
  "orders/getOrderByProductId",
  async (productId) => {
    const response = await getOrderByProductIdAPI(productId);
    return response;
  }
);

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

// action
export const getFullOrderOfUser = (userId) => {
  return (dispatch) => {
    dispatch(getOrdersBySellerId(userId));
    dispatch(getOrdersByBuyerId(userId));
  };
};

// reducer (action methods)
export const { resetOrdersCurrentProcess } = ordersSlice.actions;

// selector
export const selectCurrentOrder = (state) => state.orders.currentOrder;
export const selectSellerOrders = (state) => state.orders.sellerOrders;
export const selectBuyerOrders = (state) => state.orders.buyerOrders;
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
