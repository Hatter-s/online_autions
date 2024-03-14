import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Search } from "react-bootstrap-icons";
import { changeDateFormat } from "@/utils";

import { selectAllCategories } from "../categoriesSlice";

function SearchBar() {
  const [category, setCategory] = useState("label");
  const [fixPrice, setFixPrice] = useState("label");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const categories = useSelector(selectAllCategories);
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSearch}>
      <div className="flex items-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="search" placeholder="search by name" />
        </Form.Group>
        <Form.Select
          aria-label="Select category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="label" disabled>
            Choose category
          </option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Min price:</Form.Label>
          <Form.Control
            type="number"
            min={0}
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Max price:</Form.Label>
          <Form.Control
            type="number"
            min={minPrice}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </Form.Group>
      </div>

      <Form.Select
        aria-label="Fix price example"
        value={fixPrice}
        onChange={(e) => setFixPrice(e.target.value)}
      >
        <option value="label" disabled>
          Fix price
        </option>
        <option value={true}>True</option>
        <option value={false}>False</option>
      </Form.Select>
      {(fixPrice !== false && fixPrice !== "label") && (
        <>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Min date:</Form.Label>
            <Form.Control
              type="date"
              min={changeDateFormat(new Date())}
              value={minDate}
              onChange={(e) => setMinDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Max date:</Form.Label>
            <Form.Control
              type="date"
              min={minDate}
              value={maxDate}
              onChange={(e) => setMaxDate(e.target.value)}
            />
          </Form.Group>
        </>
      )}

      <Button variant="primary" type="submit">
        <Search />
      </Button>
    </Form>
  );
}

export default SearchBar;
