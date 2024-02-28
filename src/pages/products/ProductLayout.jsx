import Layout from "@/app/layout/Layout";
import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default ProductsLayout;
