import Product from "./Product";
import Products from "./Products";
import AddProduct from "./addProduct";
import UpdateProduct from "./UpdateProduct";

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
    },
    {
        id: "update-product",
        path: "update-product/:id",
        Component: UpdateProduct
    }
];

export default productsRouter;