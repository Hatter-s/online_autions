import Product from "./Product";
import Products from "./Products";
import AddProduct from "./addProduct";

const productsRouter = [
    { index: true, Component: Products },
    {
        id: 'product',
        path: "product/:id",
        Component: Product
    },
    {
        id: "add-product",
        path: "add-product",
        Component: AddProduct
    }
];

export default productsRouter;