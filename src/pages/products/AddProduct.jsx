import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import ButtonPrimary from "@/components/UI/ButtonPrimary";

/* eslint-disable react/no-unknown-property */
const AddProduct = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [fixPrice, setFixPrice] = useState(false);

  return (
    <>
      <h1 unique-attr="true">Add Product</h1>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mb-10"
      >
        <Form.Group className="mb-3" controlId="formProductImage">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
              const [file] = e.target.files;
              
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
