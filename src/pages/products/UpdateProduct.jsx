import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  selectProductStatus,
  selectCurrentProduct,
  getProductById,
  updateProduct,
  resetCurrentProcess,
} from "./productsSlice";
import ButtonPrimary from "@/components/UI/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../user/userSlice";
import { selectAllCategories } from "./categoriesSlice";
import AddCategory from "./component/AddCategory";
import { useNavigate } from "react-router-dom";
import { changeDateFormat, getImageByUrl } from "@/utils";

/* eslint-disable react/no-unknown-property */
const UpdateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id: productId } = useParams();
  const categories = useSelector(selectAllCategories);
  const user = useSelector(selectUser);
  const product = useSelector(selectCurrentProduct);

  const { currentProcess, status } = useSelector(selectProductStatus);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (currentProcess === "update-product" && status === "succeeded") {
      dispatch(resetCurrentProcess());
      navigate(`/products/product/${productId}`);
    }
  }, [currentProcess, status, dispatch, navigate, productId]);

  useEffect(() => {
    if (product) {
      setCategory(product.category);
      setName(product.name);
      //   setImage(getImageByUrl("products", product.id, product.product_image));
      setPreviewSrc(
        getImageByUrl("products", product.id, product.product_image)
      );
      setImageFile(
        getImageByUrl("products", product.id, product.product_image)
      );
      setDescription(product.description);
      setPrice(product.minium_price);
      setFixPrice(product.is_fix_price);
      setTimeClosing(changeDateFormat(product.time_closing));
    }
  }, [product]);

  const [category, setCategory] = useState("label");
  const [name, setName] = useState("");

  //setup image
  const [image, setImage] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [imageFile, setImageFile] = useState("");

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [fixPrice, setFixPrice] = useState(false);
  const [updateFile, setUpdateFile] = useState(false);
  const [timeClosing, setTimeClosing] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    let updateData = {
      name,
      description,
      is_fix_price: fixPrice,
      minium_price: Number(price),
      seller: user.id,
      categories: category,
    };
    if (updateFile) {
      updateData = {
        name,
        description,
        is_fix_price: fixPrice,
        minium_price: Number(price),
        seller: user.id,
        product_image: imageFile,
        categories: category,
      };
    }
    
    if(!fixPrice) {
      updateData = {
        ...updateData, 
        time_closing: new Date(timeClosing),
      }
    }

    dispatch(updateProduct({ productId, updateData }));
  };

  return (
    <>
      <h1 unique-attr="true">Update {product.name}</h1>

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
              setUpdateFile(true);
              if (file) {
                setPreviewSrc(URL.createObjectURL(file));
              }
            }}
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

        {!fixPrice && (
          <Form.Group className="mb-3" controlId="formTimeClosing">
            <Form.Label>Time Closing</Form.Label>

            <Form.Control
              type="date"
              value={timeClosing}
              onChange={(e) => setTimeClosing(e.target.value)}
              min={changeDateFormat(new Date().getTime() + 24 * 60 * 60 * 1000)}
              max={changeDateFormat(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)}
              required
            />
          </Form.Group>
        )}

        <ButtonPrimary type="submit">Submit</ButtonPrimary>
      </Form>
    </>
  );
};

export default UpdateProduct;
