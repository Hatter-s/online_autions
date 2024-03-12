import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../userSlice";
import { selectAllCategories } from "../../products/categoriesSlice";
import ButtonPrimary from "@/components/UI/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import {
  selectProducts,
  getWatchList
} from "../../products/productsSlice";

import { selectCurrentOrder } from "@/app/slice/ordersSlice";
import { getCategoryById } from "@/utils";


import { Row, Card, Col } from "react-bootstrap";

const WatchList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(selectUserId);
  const categories = useSelector(selectAllCategories);
  const products = useSelector(selectProducts);
  const currentOrder = useSelector(selectCurrentOrder);

  useEffect(() => {
    if (userId) {
      dispatch(getWatchList(userId));
    }
  }, [dispatch, userId]);

  const someName = useMemo(() => {
    return products.map(product => {
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
            haveOrder: false
          }
        }
    
        result = {
          ...result,
          category: getCategoryById(categories, product.category)
        }
    
    
        return result;
    })

    
  }, [products, currentOrder, categories]);


  if (products.length === 0) {
    return (
      <>
        <div className="flex items-center flex-col mt-10">
          <h1 className="text-gray-700 mb-16">
            You don&apos;t add any product to watch list yet
          </h1>
          <ButtonPrimary
            type="button"
            handleClick={() => navigate("/products/add-product")}
          >
            Add product
          </ButtonPrimary>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="my-10">
      <h1>Watch list</h1>
      <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4 items-stretch">
        {someName.map((product) => (
          <Col key={product.id} className="flex flex-col">
            <Card className="flex-1">
              <Card.Img
                variant="top"
                src={`${import.meta.env.VITE_FILE_URL}/products/${product.id}/${
                  product.product_image
                }?thumb=100X300`}
                alt={`${product.name} image`}
                className="aspect-square"
              />
              <Card.Body className="flex flex-col gap-4 justify-between">
                <div>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="bg-blue-400 text-gray-100 inline-block px-2 py-1 rounded-full">{product.category}</Card.Text>
                  <Card.Text>{product.description.slice(0, 100)}</Card.Text>
                </div>

                <ButtonPrimary
                  handleClick={() => navigate(`/products/product/${product.id}`)}
                >
                  See
                </ButtonPrimary>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    </>
  );
};

export default WatchList;
