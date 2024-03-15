/* eslint-disable react/no-unknown-property */
import ButtonPrimary from "@/components/UI/ButtonPrimary.jsx";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { selectProducts } from "./productsSlice";
import { selectAllCategories } from "./categoriesSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategoryById } from "@/utils";
import SearchBar from "./component/SearchBar";
import SortBar from "./component/SortBar";
import { remainDate } from "@/utils";

const Products = () => {
  const navigate = useNavigate();

  const products = useSelector(selectProducts);
  const categories = useSelector(selectAllCategories);

  return (
    <div className="my-10">
      <div className="flex flex-row flex-wrap justify-between items-center mb-10">
        <h1 className="">Products page</h1>
        <ButtonPrimary handleClick={() => navigate("add-product")}>
          Add product
        </ButtonPrimary>
      </div>
      <SearchBar />
      <SortBar />
      {products.length === 0 && (
        <>
          <h2 className="text-center">
            We don&apos;t have any products fit your requirement
          </h2>
        </>
      )}
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
                      <Card.Title>{product.expand.seller.name}</Card.Title>
                    </div>

                    <Card.Text className="bg-blue-400 text-gray-100 inline-block px-2 py-1 rounded-full">
                      {product.expand.categories.name}
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
      )}
    </div>
  );
};

export default Products;
