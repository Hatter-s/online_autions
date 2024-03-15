import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Image, Row, Col, Card } from "react-bootstrap";
import ButtonPrimary from "@/components/UI/ButtonPrimary.jsx";
import AuctionImg1 from "@/assets/image/auction_1.jpg";
import AuctionImg2 from "@/assets/image/auction_2.jpg";
import AuctionImg3 from "@/assets/image/auction_3.webp";
import MainLayout from "@/app/layout/MainLayout";
import { selectProducts, getAllProducts } from "../products/productsSlice";
import { remainDate } from "@/utils";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(
      getAllProducts({
        filter: null,
        sort: { sortType: "DESC", sortKind: "created" },
      })
    );
  }, [dispatch]);

  return (
    <>
      <MainLayout>
        <Carousel className="mb-10" fade controls={false}>
          <Carousel.Item style={{ height: "calc(100vh - 56px)" }}>
            <Image
              src={AuctionImg1}
              text="First slide"
              className="h-full w-full"
            />
            <Carousel.Caption>
              <div className=" bg-gray-900/5">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "calc(100vh - 56px)" }}>
            <Image
              src={AuctionImg2}
              text="Second slide"
              className="h-full w-full"
            />
            <Carousel.Caption>
              <div className=" bg-gray-900/20">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "calc(100vh - 56px)" }}>
            <Image
              src={AuctionImg3}
              text="Third slide"
              className="h-full w-full"
            />
            <Carousel.Caption>
              <div className=" bg-gray-900/5">
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="container">
          <h2>New products</h2>
          {products.length !== 0 && (
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
                          {product.expand?.categories.name}
                        </Card.Text>
                        <Card.Text>
                          {product.description.slice(0, 100)}
                        </Card.Text>
                        {!product.is_fix_price && (
                          <>
                            <div className="flex flex-row gap-2 items-center text-lg">
                              <p className="text-lg font-semibold">
                                Minium price:
                              </p>
                              <p
                                className={` font-semibold ${
                                  (product.current_price === 0 ||
                                    typeof product.current_price ===
                                      "undefined") &&
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
                        handleClick={() => navigate(`products/product/${product.id}`)}
                      >
                        See
                      </ButtonPrimary>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
