import { useMemo } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import ButtonPrimary from "@/components/UI/ButtonPrimary";
import { remainDate } from "@/utils";
import { useNavigate, Link } from "react-router-dom";

const SellerOrders = (props) => {
  const navigate = useNavigate();
  const sellerOrders = useMemo(() => props.orders, [props.orders]);

  if (sellerOrders.length === 0) {
    return (
      <div className="my-4 sellerOrders">
        <h2>Buyer Orders</h2>
        <p>Your don&apos;t have any order yet</p>
        <Link to="/products">Go to products page</Link>
      </div>
    );
  }

  return (
    <div className="my-4 sellerOrders">
      <h2>Buyer Orders</h2>
      <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4 items-stretch">
        {sellerOrders.map((order) => (
          <Col key={order.id} className="flex flex-col">
            <Card className="flex-1">
              <Card.Img
                variant="top"
                src={`${import.meta.env.VITE_FILE_URL}/products/${
                  order.product_id
                }/${order.expand.product_id.product_image}?thumb=100X300`}
                alt={`${order.expand.product_id.name} image`}
                className="aspect-square"
              />
              <Card.Body className="flex flex-col gap-4 justify-between">
                <div>
                  <Card.Title>{order.expand.product_id.name}</Card.Title>
                  <div className="flex flex-row gap-2">
                    <p>Order Id:</p>
                    <Card.Text>{order.id}</Card.Text>
                  </div>
                  <div className="flex flex-row gap-2">
                    <p>Buyer:</p>
                    <Card.Text>{order.expand.buyer_id.name}</Card.Text>
                  </div>
                  {order.is_fix_price && (
                    <div className="flex flex-row gap-2">
                      <p>Price:</p>
                      <Card.Text>{order.offer_price}$</Card.Text>
                    </div>
                  )}
                  {!order.is_fix_price && (
                    <>
                      <div className="flex flex-row gap-2">
                        <p>Offer Price:</p>
                        <Card.Text>{order.offer_price}$</Card.Text>
                      </div>
                      <div className="flex flex-row gap-2">
                        <p>Time remain:</p>
                        <Card.Text>
                          {remainDate(order.expand.product_id.time_closing)}
                        </Card.Text>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex gap-2 items-stretch">
                  <Button
                    type="button"
                    variant="outline-primary"
                    className="p-2"
                    onClick={() =>
                      navigate(`/products/product/${order.product_id}`)
                    }
                  >
                    See product
                  </Button>
                  <ButtonPrimary handleClick={() => navigate(`/`)}>
                    See shipping
                  </ButtonPrimary>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SellerOrders;
