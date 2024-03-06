import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { selectAllCategories } from "./categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentProduct,
  getProductById,
  toggleOfferModal,
} from "./productsSlice";
import { Row, Col, Button } from "react-bootstrap";
import { getCategoryById } from "@/utils";
import { Cart } from "react-bootstrap-icons";
import OfferModal from "./component/OfferModal";
import {
  getSellerById,
  selectIsSeller,
  selectSeller,
} from "@/pages/user/sellerSlice";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id: productId } = useParams();
  const product = useSelector(selectCurrentProduct);
  const categories = useSelector(selectAllCategories);
  const seller = useSelector(selectSeller);
  const isSeller = useSelector(selectIsSeller);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (product.seller) {
      dispatch(getSellerById(product.seller));
    }
  }, [product, dispatch]);

  if (isSeller) {
    return (
      <>
        <div className="my-10">
          <OfferModal />
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
              <p className="text-xl font-medium">{seller.username}</p>
              <p className="bg-blue-400 text-gray-100 inline-block px-2 py-1 rounded-full">
                {getCategoryById(categories, product.category)}
              </p>
              <p>{product.description}</p>
              <p>{`${product.is_fix_price}`}</p>
              <div className="flex flex-row gap-4">
                <p className="text-lg font-semibold">Minium price:</p>
                <p className="text-3xl text-pri-grad font-semibold">
                  {product.minium_price}$
                </p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => navigate(`/products/update-product/${productId}`)}>
                  Update
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }

  return (
    <div className="my-10">
      <OfferModal />
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
          <p className="text-xl font-medium">{seller.username}</p>
          <p className="bg-blue-400 text-gray-100 inline-block px-2 py-1 rounded-full">
            {getCategoryById(categories, product.category)}
          </p>
          <p>{product.description}</p>
          <p>{`${product.is_fix_price}`}</p>
          {!product.is_fix_price && (
            <>
              <div className="flex flex-row gap-4">
                <p className="text-lg font-semibold">Minium price:</p>
                <p className="text-3xl text-pri-grad font-semibold">
                  {product.minium_price}$
                </p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => dispatch(toggleOfferModal())}>
                  Make offer
                </Button>
                <Button variant="outline-primary">
                  <div className="flex flex-row gap-1 items-center">
                    <Cart /> Add to watch list
                  </div>
                </Button>
              </div>
            </>
          )}

          {product.is_fix_price && (
            <>
              <div className="flex flex-row gap-4">
                <p className="text-lg font-semibold">Price:</p>
                <p className="text-3xl text-pri-grad font-semibold">
                  {product.minium_price}$
                </p>
              </div>
              <div className="flex gap-2">
                <Button>Buy</Button>
                <Button variant="outline-primary">
                  <div className="flex flex-row gap-1 items-center">
                    <Cart /> Add to watch list
                  </div>
                </Button>
              </div>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Product;
