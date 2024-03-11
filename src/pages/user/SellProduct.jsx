import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSellProducts, selectUserId } from "./userSlice";
import { selectAllCategories } from "../products/categoriesSlice";
import ButtonPrimary from "@/components/UI/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import {
  getProductBySellerId,
  selectProducts,
} from "../products/productsSlice";
import { getCategoryById } from "@/utils";


import { Row, Card, Col } from "react-bootstrap";

const SellProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(selectUserId);
  const categories = useSelector(selectAllCategories);
  const sellProducts = useSelector(selectProducts);

  useEffect(() => {
    if (userId) {
      dispatch(getProductBySellerId(userId));
    }
  }, [dispatch, userId]);

  if (sellProducts.length === 0) {
    return (
      <>
        <div className="flex items-center flex-col mt-10">
          <h1 className="text-gray-700 mb-16">
            You don&apos;t sell any product yet
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
      <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4 items-stretch">
        {sellProducts.map((product) => (
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
    </>
  );
};

export default SellProducts;
