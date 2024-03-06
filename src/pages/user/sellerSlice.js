import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSellerByIdAPI } from "@/api";

const initialState = {
  sellerData: {
    id: 0,
    username: "",
    email: "",
    avatar: "",
    balance: 0,
    watch_list: [],
    sell_list: [],
  },
  // Multiple possible status enum values
  //   status: 'idle' | 'loading' | 'succeeded' | 'failed',
  status: "idle",
  //error: null | string
  error: null,
};

export const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(getSellerById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSellerById.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.error = null;
        state.sellerData = action.payload;
      })
      .addCase(getSellerById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

//thunk
export const getSellerById = createAsyncThunk("users/getSellerById", async (sellerId) => {
  const response = await getSellerByIdAPI(sellerId);
  return response;
});

// reducer (action methods)

// selector
export const selectSeller = state => state.seller.sellerData;

export const selectStatus = state => state.seller.status;
export const selectSellersError = state => state.seller.error;
export const selectIsSeller = state => {
  if(state.seller.sellerData?.id){
    return state.seller.sellerData.id === state.users.userData.id
  }
};

export default sellerSlice.reducer;
