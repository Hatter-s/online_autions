import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '@/pages/user/userSlice';
import alertReducer from '@/pages/alert/alertSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    alert: alertReducer
  }
})