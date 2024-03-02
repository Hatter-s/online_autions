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

const Products = () => {
  const navigate = useNavigate();

  const products = useSelector(selectProducts);
  const categories = useSelector(selectAllCategories);



  if (products.length === 0) {
    return (
      <div className="my-10">
        <h1 unique-attr="true" className="text-center">
          We don&apos;t have any product right now
        </h1>
      </div>
    );
  }

  return (
    <div className="my-10">
      <h1 className="mb-10">Products page</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 items-stretch">
        {products.map((product) => (
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
                  <Card.Text className="bg-blue-400 text-gray-100 inline-block px-2 py-1 rounded-full">{getCategoryById(categories, product.category)}</Card.Text>
                  <Card.Text>{product.description.slice(0, 100)}</Card.Text>
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
  );
};

export default Products;
