import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Search } from "react-bootstrap-icons";
import { changeDateFormat } from "@/utils";
import { getAllProducts, selectProductSort, updateFilter } from "../productsSlice";
import { selectAllCategories } from "../categoriesSlice";

function SearchBar() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("label");
  const [fixPrice, setFixPrice] = useState("label");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const categories = useSelector(selectAllCategories);
  const sort = useSelector(selectProductSort);
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    const filter = {
      search: search,
      categories: category?.id ? category.id : category,
      fixPrice,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      minDate,
      maxDate
    }

    dispatch(updateFilter(filter));
    dispatch(getAllProducts({filter, sort}));
  };

  return (
    <Form onSubmit={handleSearch} className="mb-2">
      <div className="grid items-stretch grid-cols-12 gap-y-2">
        <Form.Group
          className="col-start-1 col-end-12"
          controlId="search text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        >
          <Form.Control type="search" placeholder="search by name" />
        </Form.Group>
        <Button variant="primary" type="submit" className=" relative">
          <Search className=" relative text-center" />
        </Button>
        <Form.Check
          type="checkbox"
          id="advanceSearch"
          label="Use advance search?"
          checked={advanceSearch}
          onChange={() => setAdvanceSearch(!advanceSearch)}
          className="col-start-1 col-end-12 mb-2"
        />
        {advanceSearch && (
          <>
            <Form.Select
              aria-label="Select category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="col-start-1 col-end-7 "
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
            <Form.Group
              className="flex gap-2 col-start-7 col-span-3 ml-4"
              controlId="min price"
            >
              <Form.Label className="mb-0 flex-1">Min price:</Form.Label>
              <Form.Control
                type="number"
                min={0}
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="flex gap-2 col-start-10 col-span-3 ml-4"
              controlId="max price"
            >
              <Form.Label className="mb-0">Max price:</Form.Label>
              <Form.Control
                type="number"
                min={minPrice}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Select
              aria-label="Fix price example"
              value={fixPrice}
              onChange={(e) => setFixPrice(e.target.value)}
              className="col-start-1 col-end-3"
            >
              <option value="label" disabled>
                Fix price
              </option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Form.Select>
            {fixPrice === "false" && (
              <>
                <Form.Group
                  className="flex ml-4 col-start-3 col-span-5"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="mb-0">Min date:</Form.Label>
                  <Form.Control
                    type="date"
                    min={changeDateFormat(new Date())}
                    value={minDate}
                    onChange={(e) => setMinDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="flex ml-4 col-start-8 col-span-5"
                  controlId="exampleForm.ControlInput1"
                >
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
          </>
        )}
      </div>
    </Form>
  );
}

export default SearchBar;
