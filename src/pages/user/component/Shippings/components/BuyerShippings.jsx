import { useMemo, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import ButtonPrimary from "@/components/UI/ButtonPrimary";
import { useNavigate, Link } from "react-router-dom";
import { handleShippingStatus } from "@/utils";
import ShippingStatusModal from "./ShippingStatusModal";

const BuyerShippings = (props) => {
  const navigate = useNavigate();
  const buyerShippings = useMemo(() => props.shippings, [props.shippings]);


  if (buyerShippings.length === 0) {
    return (
      <div className="my-4 buyerShippings">
        <h2>Your Shippings</h2>
        <p>Your don&apos;t have any shipping yet</p>
        <Link to="/products">Go to products page</Link>
      </div>
    );
  }

  return (
    <>

      <div className="my-4 buyerShippings">
        <h2>Your Shippings</h2>
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4 items-stretch">
          {buyerShippings.map((shipping) => (
            <Col key={shipping.id} className="flex flex-col">
              <Card className="flex-1">
                <Card.Img
                  variant="top"
                  src={`${import.meta.env.VITE_FILE_URL}/products/${
                    shipping.expand.order.product_id
                  }/${
                    shipping.expand.order.expand.product_id.product_image
                  }?thumb=100X300`}
                  alt={`${shipping.expand.order.expand.product_id.name} image`}
                  className="aspect-square"
                />
                <Card.Body className="flex flex-col gap-4 justify-between">
                  <div>
                    <Card.Title>
                      {shipping.expand.order.expand.product_id.name}
                    </Card.Title>
                    <div className="flex flex-row gap-2">
                      <p>Shipping Id:</p>
                      <Card.Text>{shipping.id}</Card.Text>
                    </div>
                    <div className="flex flex-row gap-2">
                      <p>Buyer:</p>
                      <Card.Text>{shipping.expand.buyer.name}</Card.Text>
                    </div>
                    {shipping.expand.order.is_fix_price && (
                      <div className="flex flex-row gap-2">
                        <p>Price:</p>
                        <Card.Text>
                          {shipping.expand.order.offer_price}$
                        </Card.Text>
                      </div>
                    )}
                    {!shipping.expand.order.is_fix_price && (
                      <>
                        <div className="flex flex-row gap-2">
                          <p>Offer Price:</p>
                          <Card.Text>
                            {shipping.expand.order.offer_price}$
                          </Card.Text>
                        </div>
                      </>
                    )}
                    <div className="flex flex-row gap-2">
                      <p>Shipping status:</p>
                      <Card.Text>
                        {handleShippingStatus(shipping.status)}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="flex gap-2 items-stretch flex-wrap flex-col">
                    <Button
                      type="button"
                      variant="outline-primary"
                      className="p-2 flex-1"
                      onClick={() =>
                        navigate(`/products/product/${shipping.expand.order.product_id}`)
                      }
                    >
                      See product
                    </Button>
                    <Button
                      type="button"
                      variant="outline-danger"
                      className="p-2 flex-1"
                      onClick={() => {
                        props.toggleStatusModal();
                        props.setIsDelete('buyer');
                        props.setCurrentShippingId(shipping.id);
                      }}
                      disabled={shipping.status === 1 || shipping.status === 2 || shipping.status === 5}
                    >
                      Cancel order
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default BuyerShippings;
