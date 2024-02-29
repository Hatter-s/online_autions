import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '@/pages/user/userSlice';
import alertReducer from '@/pages/alert/alertSlice';
import productsReducer from '@/pages/products/productsSlice';
import categoriesReducer from '@/pages/products/categoriesSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    alert: alertReducer,
    products: productsReducer,
    categories: categoriesReducer,
  }
})
