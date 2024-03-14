import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '@/pages/user/userSlice';
import alertReducer from '@/pages/alert/alertSlice';
import productsReducer from '@/pages/products/productsSlice';
import categoriesReducer from '@/pages/products/categoriesSlice';
import sellerReducer from '@/pages/user/sellerSlice';
import ordersReducer from './slice/ordersSlice';
import shippingsReducer from './slice/shippingsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    alert: alertReducer,
    products: productsReducer,
    categories: categoriesReducer,
    seller: sellerReducer,
    shippings: shippingsReducer,
    orders: ordersReducer,
  }
})
