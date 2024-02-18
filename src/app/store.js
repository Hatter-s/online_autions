import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../pages/user/userSlice';

export default configureStore({
  reducer: {
    users: usersReducer
  }
})