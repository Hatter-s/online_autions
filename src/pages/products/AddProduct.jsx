import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import {
  addProduct,
  selectAddProductSuccess,
  resetAddProductSuccess,
} from "./productsSlice";
import ButtonPrimary from "@/components/UI/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../user/userSlice";
import { selectAllCategories } from "./categoriesSlice";
import AddCategory from "./component/AddCategory";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = useSelector(selectAllCategories);
  const user = useSelector(selectUser);
  const addProductSuccess = useSelector(selectAddProductSuccess);

  useEffect(() => {
    if (addProductSuccess) {
      dispatch(resetAddProductSuccess());
        navigate("/products");
    }
  }, [addProductSuccess, dispatch, navigate]);

  const [category, setCategory] = useState("label");
  const [name, setName] = useState("");

  //setup image
  const [image, setImage] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [imageFile, setImageFile] = useState("");

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [fixPrice, setFixPrice] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name,
      description,
      is_fix_price: fixPrice,
      minium_price: Number(price),
      seller: user.id,
      product_image: imageFile,
      categories: category
    };

    dispatch(addProduct(productData));
  };
  return (
    <>
      <h1 unique-attr="true">Add Product</h1>

      <Form onSubmit={(e) => handleSubmit(e)} className="mb-10">
        <Form.Group className="mb-3" controlId="formProductImage">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
              const [file] = e.target.files;
              setImageFile(file);
              if (file) {
                setPreviewSrc(URL.createObjectURL(file));
              }
            }}
            required
          />
          {previewSrc && <img src={previewSrc} />}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasePrice">
          <Form.Label>Base Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Base price"
            min={1}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select
            className="mb-2"
            aria-label="select category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled value="label">
              Choose category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
          <AddCategory />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFixPrice">
          <Form.Check
            type="checkbox"
            label="Fix price?"
            checked={fixPrice}
            onChange={() => setFixPrice(!fixPrice)}
          />
        </Form.Group>

        <ButtonPrimary type="submit">Submit</ButtonPrimary>
      </Form>
    </>
  );
};

export default AddProduct;
