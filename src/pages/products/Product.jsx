import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectAllCategories } from "./categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentProduct, getProductById } from "./productsSlice";
import { Row, Col } from "react-bootstrap";
import { getCategoryById } from "@/utils";

const Product = () => {
  const dispatch = useDispatch();

  const { id: productId } = useParams();
  const product = useSelector(selectCurrentProduct);
  const categories = useSelector(selectAllCategories);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  return (
    <div className="my-10">
      <Row sm={1} md={2} xl={2}>
        <Col>
          <img
            src={`${import.meta.env.VITE_FILE_URL}/products/${product.id}/${
              product.product_image
            }`}
          />
        </Col>
        <Col>
          <h1>{product.name}</h1>
          <p className="bg-blue-400 text-gray-100 inline-block px-2 py-1 rounded-full">{getCategoryById(categories, product.category)}</p>
          <p>{product.description}</p>
          <p>{`${product.is_fix_price}`}</p>
          <p>{product.price}</p>
          <p>{product.minium_price}</p>
          
        </Col>
      </Row>
    </div>
  );
};

export default Product;
