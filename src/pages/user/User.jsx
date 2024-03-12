import UserLayout from "@/app/layout/UserLayout";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getAllCategories } from "../products/categoriesSlice";
import { useDispatch } from "react-redux";

  function User() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllCategories());

    }, [dispatch])
    

  return (
    <>
      <UserLayout>
        <Outlet />
      </UserLayout>
    </>
  );
}

export default User;
