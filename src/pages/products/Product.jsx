import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { selectAllCategories } from "./categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentProduct,
  toggleOfferModal,
  getFullCurrentProduct,
  addUserToWishlist,
} from "./productsSlice";
import { selectUserId } from "../user/userSlice";

import { selectCurrentOrder } from "@/app/slice/ordersSlice";

import { Row, Col, Button } from "react-bootstrap";
import { getCategoryById, remainDate } from "@/utils";
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
  const userId = useSelector(selectUserId);
  const isSeller = useSelector(selectIsSeller);
  const currentOrder = useSelector(selectCurrentOrder);

  const someName = useMemo(() => {
    let result = { ...product };

    if (currentOrder?.buyer_id !== "" && currentOrder) {
      result = {
        ...result,
        offer_price: currentOrder.offer_price,
        buyer_name: currentOrder.buyer_name,
        haveOrder: true,
      };
    } else {
      result = {
        ...result,
        haveOrder: false,
      };
    }
    result = {
      ...result,
      category: getCategoryById(categories, product.categories),
    };

    return result;
  }, [product, currentOrder, categories]);

  const handleAddWatchList = (productId, userId, wishListOf) => {
    dispatch(addUserToWishlist({ productId, userId, wishListOf }));
  };

  useEffect(() => {
    getFullCurrentProduct(productId)(dispatch);
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
                {someName.category}
              </p>
              <p>{product.description}</p>
              <div className="flex flex-row gap-4">
                <p className="text-lg font-semibold">Minium price:</p>
                <p className="text-3xl text-pri-grad font-semibold">
                  {product.minium_price}$
                </p>
              </div>
              {!someName.is_fix_price && (
                <>
                  <div className="flex flex-row gap-2 text-lg font-medium">
                    <p>Time remain:</p>
                    <p>{remainDate(someName.time_closing)}</p>
                  </div>
                </>
              )}
              <div className="flex gap-2">
                <Button
                  onClick={() =>
                    navigate(`/products/update-product/${productId}`)
                  }
                  disabled={someName.product_status !== 0 || someName.haveOrder}
                >
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
      <OfferModal isFixPrice={someName.is_fix_price} someName={someName} />
      <Row xs={1} sm={1} md={2} xl={2}>
        <Col>
          <img
            src={`${import.meta.env.VITE_FILE_URL}/products/${product.id}/${
              product.product_image
            }`}
          />
        </Col>
        <Col>
          <h1>{someName.name}</h1>
          <p className="text-xl font-medium">{seller.username}</p>
          <p className="bg-blue-400 text-gray-100 inline-block px-2 py-1 rounded-full">
            {someName.category}
          </p>
          <p>{someName.description}</p>

          {!someName.is_fix_price && (
            <>
              <div className="flex flex-row gap-2 text-lg font-medium">
                <p>Time remain:</p>
                <p>{remainDate(someName.time_closing)}</p>
              </div>
              <div className="flex flex-row gap-4">
                <p className="text-lg font-semibold">Minium price:</p>
                <p className="text-3xl text-pri-grad font-semibold">
                  {someName.minium_price}$
                </p>
              </div>
              {someName.haveOrder && (
                <div>
                  <div className="flex flex-row gap-2">
                    <p className="text-lg font-semibold">Current price:</p>
                    <p className="text-lg font-semibold">
                      {someName.offer_price}$
                    </p>
                    <p className="text-lg font-semibold">by</p>
                    <p className="text-lg font-semibold">
                      {someName.buyer_name}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button
                  onClick={() => dispatch(toggleOfferModal())}
                  disabled={someName.product_status !== 0}
                >
                  Make offer
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() =>
                    handleAddWatchList(
                      someName.id,
                      userId,
                      someName.wish_list_of
                    )
                  }
                  disabled={someName.product_status !== 0}
                >
                  <div className="flex flex-row gap-1 items-center">
                    <Cart /> Add to watch list
                  </div>
                </Button>
              </div>
            </>
          )}

          {someName.is_fix_price && (
            <>
              <div className="flex flex-row gap-4">
                <p className="text-lg font-semibold">Price:</p>
                <p className="text-3xl text-pri-grad font-semibold">
                  {someName.minium_price}$
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => dispatch(toggleOfferModal())}
                  disabled={someName.product_status !== 0}
                >
                  Buy
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() =>
                    handleAddWatchList(
                      someName.id,
                      userId,
                      someName.wish_list_of
                    )
                  }
                  disabled={someName.product_status !== 0}
                >
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
