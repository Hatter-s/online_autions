/* eslint-disable react/no-unknown-property */
import ButtonPrimary from "@/components/UI/ButtonPrimary.jsx";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { selectProducts } from "./productsSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const products = useSelector(selectProducts);

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
          <Col key={product.id}>
            <Card className="h-full">
              <Card.Img
                variant="top"
                src={`${import.meta.env.VITE_FILE_URL}/products/${product.id}/${product.product_image}?thumb=100X300`}
                alt={`${product.name} image`}
								className="aspect-square"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.category}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
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
