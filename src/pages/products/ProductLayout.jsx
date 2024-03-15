import Layout from "@/app/layout/Layout";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getAllCategories } from "./categoriesSlice";
import { getAllProducts, selectProductFilter, selectProductSort } from "./productsSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductsLayout = () => {
  const dispatch = useDispatch();
  const productFilter = useSelector(selectProductFilter);
  const productSort = useSelector(selectProductSort);

  useEffect(() => {
    dispatch(getAllProducts({filter: productFilter, sort: productSort}));
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
