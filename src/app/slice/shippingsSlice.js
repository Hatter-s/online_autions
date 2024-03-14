import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import {
  addShippingAPI,
  getShippingsBySellerIdAPI,
  getShippingsByBuyerIdAPI,
  updateShippingAPI,
} from "@/api";

const initialState = {
  sellerShippings: [],
  buyerShippings: [],
  currentShipping: {},
  // Process available: add-shipping, update-shipping
  currentProcess: null,
  // Multiple possible status enum values
  //   status: 'idle' | 'loading' | 'succeeded' | 'failed',
  status: "idle",
  //error: null | string
  error: null,
};

export const shippingsSlice = createSlice({
  name: "shippings",
  initialState,
  reducers: {
    resetShippingsCurrentProcess(state) {
      state.currentProcess = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addShipping.pending, (state) => {
        state.currentProcess = "add-shipping";
        state.status = "loading";
      })
      .addCase(addShipping.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(addShipping.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(updateShipping.pending, (state) => {
        state.currentProcess = "update-shipping";
        state.status = "loading";
      })
      .addCase(updateShipping.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.buyerShippings = state.buyerShippings.map((shipping) => {
          if (shipping.id === action.payload.id) {
            return action.payload;
          }
          return shipping;
        });
        state.sellerShippings = state.sellerShippings.map((shipping) => {
          if (shipping.id === action.payload.id) {
            return action.payload;
          }
          return shipping;
        });
        state.error = null;
      })
      .addCase(updateShipping.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getShippingsByBuyerId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getShippingsByBuyerId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.buyerShippings = action.payload;
        state.error = null;
      })
      .addCase(getShippingsByBuyerId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getShippingsBySellerId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getShippingsBySellerId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.sellerShippings = action.payload;
        state.error = null;
      })
      .addCase(getShippingsBySellerId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//thunk

export const getShippingsBySellerId = createAsyncThunk(
  "shippings/getShippingsBySellerId",
  async (sellerId) => {
    const response = await getShippingsBySellerIdAPI(sellerId);
    return response;
  }
);

export const getShippingsByBuyerId = createAsyncThunk(
  "shippings/getShippingsByBuyerId",
  async (buyerId) => {
    const response = await getShippingsByBuyerIdAPI(buyerId);
    return response;
  }
);

export const addShipping = createAsyncThunk(
  "shippings/addShipping",
  async (shippingData) => {
    const response = await addShippingAPI(shippingData);
    return response;
  }
);

export const updateShipping = createAsyncThunk(
  "shippings/updateShipping",
  async ({ shippingId, updateData }) => {
    const response = await updateShippingAPI(shippingId, updateData);
    return response;
  }
);

// action
export const getFullShippingsOfUser = (userId) => {
  return (dispatch) => {
    dispatch(getShippingsBySellerId(userId));
    dispatch(getShippingsByBuyerId(userId));
  };
};

// reducer (action methods)
export const { resetShippingsCurrentProcess } = shippingsSlice.actions;

// selector
export const selectCurrentShipping = (state) => state.shippings.currentShipping;
export const selectSellerShippings = (state) => state.shippings.sellerShippings;
export const selectBuyerShippings = (state) => state.shippings.buyerShippings;
export const selectShippingsError = (state) => state.shippings.error;

export const selectStatus = (state) => state.shippings.status;
export const selectCurrentProcess = (state) => state.shippings.currentProcess;

export const selectShippingStatus = createSelector(
  selectStatus,
  selectCurrentProcess,
  (status, currentProcess) => {
    return {
      status,
      currentProcess,
    };
  }
);

export default shippingsSlice.reducer;
