import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, logoutAPI, resetTokenAPI } from "@/api";

const initialState = {
  userData: {
    id: 0,
    username: "",
    email: "",
    avatar: "",
    balance: "",
    watch_list: "",
  },
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
    register: (state, action) => {},
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
      })
      .addCase(login.rejected, (state, action) => {
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

          state.userData = action.payload;
        }
      })
      .addCase(resetToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
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

export const resetToken = createAsyncThunk("user/resetToken", async () => {
  const response = await resetTokenAPI();
  return response;
});

// reducer (action methods)

// selector
export const selectUser = (state) => state.users.userData;

export default usersSlice.reducer;
