import {
  createBrowserRouter,
} from "react-router-dom";

import Login from '@/pages/user/Login';
import Register from "@/pages/user/Register";
import Home from "@/pages/home/Home";
import User from "@/pages/user/User";
import ForgotPassword from "@/pages/user/ForgotPassword";
import userRouter from "@/pages/user/user-router";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Home,
  },
  {
    id: 'login',
    path: "/login",
    Component: Login
  },
  {
    id: 'register',
    path: "/register",
    Component: Register,
  },
  {
    id: 'user',
    path: "/user",
    Component: User,
    children: userRouter
  },
  {
    id: 'forgotPassword',
    path: "/forgot-password",
    Component: ForgotPassword
  }
]);

export default router;