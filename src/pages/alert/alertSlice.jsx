import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  variant: 'info', // default value
  //'success', 'danger', 'warning', 'info',
  displayAlert: false,
  content: '',
  error: null,
};

export const alertSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    triggerAlert(state, action) {
        state.displayAlert = true;
        state.content = action.payload.content;
        state.variant = action.payload.variant;
    },

    closeAlert(state) {
        state = initialState;
    }
  },
  extraReducers(builder) {
    builder
    .addCase(autoClose.fulfilled, (state) => {
        state = initialState;
    })
    .addCase(autoClose.rejected, (state, action) => {
        state.error = action.error.message;
    })
  },
});
//thunk
export const autoClose = createAsyncThunk("alert/autoClose", async () => {
    setTimeout(() => {
    
    }, 2000);
  });

// reducer (action methods)
export const { triggerAlert } = alertSlice.actions;
// selector
export const selectAlert = state => state.alert;

export default alertSlice.reducer;
