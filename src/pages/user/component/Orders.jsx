import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectSellerOrders,
  selectBuyerOrders,
  getOrdersBySellerId,
  getOrdersByBuyerId
} from "@/app/slice/ordersSlice";
import { selectUserId } from "../userSlice";
import { getSellerNameById } from "@/utils";
import { Row, Col, Card } from "react-bootstrap";
import ButtonPrimary from "@/components/UI/ButtonPrimary";

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sellerOrders = useSelector(selectSellerOrders);
  const buyerOrders = useSelector(selectBuyerOrders);
  const userId = useSelector(selectUserId);

  useEffect(() => {
    if (userId !== 0) {
      dispatch(getOrdersByBuyerId(userId));
    }
  }, [dispatch, userId]);


  return (
    <div className="my-10">
      <h1>Orders</h1>
      <div className="my-4 sellerOrders">
        <h2>Buyer Orders</h2>
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4 items-stretch">
          {sellerOrders.map((order) => (
            <Col key={order.id} className="flex flex-col">
              <Card className="flex-1">
                {/* <Card.Img
                variant="top"
                src={`${import.meta.env.VITE_FILE_URL}/products/${product.id}/${
                  product.product_image
                }?thumb=100X300`}
                alt={`${product.name} image`}
                className="aspect-square"
              /> */}
                <Card.Body className="flex flex-col gap-4 justify-between">
                  <div>
                    <Card.Title>{order.product_id}</Card.Title>
                    <div className="flex flex-row gap-2">
                      <p>Order Id:</p>
                      <Card.Text>{order.buyer_id}</Card.Text>
                    </div>
                    <div className="flex flex-row gap-2">
                      <p>Buyer:</p>
                      <Card.Text>{order.buyer_id}</Card.Text>
                    </div>
                    {order.is_fix_price && (
                      <div className="flex flex-row gap-2">
                        <p>Price:</p>
                        <Card.Text>{order.offer_price}</Card.Text>
                      </div>
                    )}
                    {!order.is_fix_price && (
                      <div className="flex flex-row gap-2">
                        <p>Offer Price:</p>
                        <Card.Text>{order.offer_price}</Card.Text>
                      </div>
                    )}
                  </div>

                  <ButtonPrimary handleClick={() => navigate(`/`)}>
                    See shipping
                  </ButtonPrimary>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="my-4 buyerOrders">
        <h2>Your Orders</h2>
        
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4 items-stretch">
          {buyerOrders.map((order) => (
            <Col key={order.id} className="flex flex-col">
              <Card className="flex-1">
                {/* <Card.Img
                variant="top"
                src={`${import.meta.env.VITE_FILE_URL}/products/${product.id}/${
                  product.product_image
                }?thumb=100X300`}
                alt={`${product.name} image`}
                className="aspect-square"
              /> */}
                <Card.Body className="flex flex-col gap-4 justify-between">
                  <div>
                    <Card.Title className="">{order.id}</Card.Title>

                    <div className="flex flex-row gap-2">
                      <p>Buyer:</p>
                      <Card.Text>{order.buyer_id}</Card.Text>
                    </div>
                    {order.is_fix_price && (
                      <div className="flex flex-row gap-2">
                        <p>Price:</p>
                        <Card.Text>{order.offer_price}</Card.Text>
                      </div>
                    )}
                    {!order.is_fix_price && (
                      <div className="flex flex-row gap-2">
                        <p>Offer Price:</p>
                        <Card.Text>{order.offer_price}</Card.Text>
                      </div>
                    )}
                  </div>

                  <ButtonPrimary handleClick={() => navigate(`\\`)}>
                    See shipping
                  </ButtonPrimary>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Orders;
