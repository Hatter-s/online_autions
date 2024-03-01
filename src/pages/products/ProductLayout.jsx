import Layout from "@/app/layout/Layout";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getAllCategories } from "./categoriesSlice";
import { getAllProducts } from "./productsSlice";
import { useDispatch } from "react-redux";

const ProductsLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
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
