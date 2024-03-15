import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../userSlice";

import ButtonPrimary from "@/components/UI/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import { selectProducts, getWatchList } from "../../products/productsSlice";
import { remainDate } from "@/utils";

import { Row, Card, Col } from "react-bootstrap";

const WatchList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(selectUserId);
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (userId) {
      dispatch(getWatchList(userId));
    }
  }, [dispatch, userId]);

  if (products.length === 0) {
    return (
      <>
        <div className="flex items-center flex-col mt-10">
          <h1 className="text-gray-700 mb-16">
            You don&apos;t add any product to watch list yet
          </h1>
          <ButtonPrimary
            type="button"
            handleClick={() => navigate("/products")}
          >
            Go to Products page
          </ButtonPrimary>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="my-10">
        <h1>Watch list</h1>
        <Row
          xs={1}
          sm={1}
          md={2}
          lg={3}
          xl={3}
          xxl={4}
          className="g-4 items-stretch"
        >
          {products.map((product) => (
            <Col key={product.id} className="flex flex-col">
              <Card className="flex-1">
                <Card.Img
                  variant="top"
                  src={`${import.meta.env.VITE_FILE_URL}/products/${
                    product.id
                  }/${product.product_image}?thumb=100X300`}
                  alt={`${product.name} image`}
                  className="aspect-square"
                />
                <Card.Body className="flex flex-col gap-4 justify-between">
                  <div>
                    <div className="flex justify-between">
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Title>{product.expand?.seller?.name}</Card.Title>
                    </div>

                    <Card.Text className="bg-blue-400 text-gray-100 inline-block px-2 py-1 rounded-full">
                      {product.expand?.categories?.name}
                    </Card.Text>
                    <Card.Text>{product.description.slice(0, 100)}</Card.Text>
                    {!product.is_fix_price && (
                      <>
                        <div className="flex flex-row gap-2 items-center text-lg">
                          <p className="text-lg font-semibold">Minium price:</p>
                          <p
                            className={` font-semibold ${
                              (product.current_price === 0 ||
                                typeof product.current_price === "undefined") &&
                              "text-3xl text-pri-grad"
                            }`}
                          >
                            {product.minium_price}$
                          </p>
                        </div>
                        {product.current_price !== 0 &&
                          typeof product.current_price !== "undefined" && (
                            <div>
                              <div className="flex flex-row gap-2 items-center mb-1">
                                <p className="mb-0 text-xl font-semibold">
                                  Current price:
                                </p>
                                <p className="mb-0 text-3xl text-pri-grad font-semibold">
                                  {product.current_price}$
                                </p>
                              </div>
                              <div className="flex flex-row gap-2">
                                <p className="mb-2 text-lg">by</p>
                                <p className="mb-2 text-lg font-semibold">
                                  {product.expand?.current_buyer?.name}
                                </p>
                              </div>
                            </div>
                          )}
                        <div className="flex flex-row gap-2 text-lg">
                          <p>Time remain:</p>
                          <p>{remainDate(product.time_closing)}</p>
                        </div>
                      </>
                    )}
                    {product.is_fix_price && (
                      <>
                        <div className="flex flex-row gap-4 items-center">
                          <p className="text-lg font-semibold">Price:</p>
                          <p className="text-3xl text-pri-grad font-semibold">
                            {product.minium_price}$
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  <ButtonPrimary
                    handleClick={() => navigate(`product/${product.id}`)}
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
