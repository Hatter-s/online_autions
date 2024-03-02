import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, logoutAPI, resetTokenAPI, registerAPI, updateUserInfoAPI, updateBalanceAPI } from "@/api";

const initialState = {
  userData: {
    id: 0,
    username: "",
    email: "",
    avatar: "",
    balance: 0,
    watch_list: [],
    sell_list: [],
  },
  displayBalanceModal: false,
  isAuthenticated: false,
  // Multiple possible status enum values
  //   status: 'idle' | 'loading' | 'succeeded' | 'failed',
  status: "idle",
  //error: null | string
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    openBalanceModal(state) {
      state.displayBalanceModal = true;
    },
    closeBalanceModal(state) {
      state.displayBalanceModal = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.error = null;
        state.userData = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state) => {
        state.status = "succeeded";

        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(logout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.error = null;
        state.userData = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      
      .addCase(resetToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetToken.fulfilled, (state, action) => {
        state.status = "succeeded";

        if (action.payload !== null) {
          state.error = null;
          state.isAuthenticated = true;
          state.userData = action.payload;
        }
      })
      .addCase(resetToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(updateUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      
      .addCase(updateBalance.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBalance.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
      })
      .addCase(updateBalance.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

//thunk
export const login = createAsyncThunk("users/login", async (userLogin) => {
  const response = await loginAPI(userLogin);
  return response;
});

export const logout = createAsyncThunk("user/logout", async () => {
  logoutAPI();
  return {
    id: 0,
    username: "",
    email: "",
    avatar: "",
    balance: "",
    watch_list: "",
  };
});

export const register = createAsyncThunk("user/register", async (userRegister) => {
  await registerAPI(userRegister);
})

export const resetToken = createAsyncThunk("user/resetToken", async () => {
  const response = await resetTokenAPI();
  return response;
});

export const updateUserInfo = createAsyncThunk("user/updateUserInfo", async ({userId, updateData}) => {
  const response = await updateUserInfoAPI(userId, updateData);
  return response;
});

export const updateBalance = createAsyncThunk("user/updateBalance", async ({userId, updateBalance}) => {
  const response = await updateBalanceAPI(userId, updateBalance);
  return response;
});
// reducer (action methods)
export const { openBalanceModal, closeBalanceModal } = usersSlice.actions;
// selector
export const selectUser = state => state.users.userData;
export const selectIsAuthenticate = state => state.users.isAuthenticated;
export const selectStatus = state => state.users.status;
export const selectBalanceModalStatus = state => state.users.displayBalanceModal;
export const selectUsersError = state => state.users.error;
export const selectSellProducts = state => state.users.userData.sell_list;

export default usersSlice.reducer;
