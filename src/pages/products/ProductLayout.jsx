import Layout from "@/app/layout/Layout";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getAllCategories } from "./categoriesSlice";
import { useDispatch } from "react-redux";

const ProductsLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());

  }, [dispatch])
  

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default ProductsLayout;
