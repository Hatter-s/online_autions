import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";

import {
  getAllProducts,
  selectProductFilter,
  updateSort,
} from "../productsSlice";

function SortBar() {
  const dispatch = useDispatch();

  const [sortType, setSortType] = useState("DESC");
  const [sortKind, setSortKind] = useState("created");
  const [firstRender, setFirstRender] = useState(true);

  const filter = useSelector(selectProductFilter);

  const handleSortType = () => {
    if (sortType === "DESC") {
      setSortType("ASC");
    } else {
      setSortType("DESC");
    }
  };

  const handleSort = (sortType, sortKind) => {
    const sort = {
      sortType,
      sortKind,
    };

    dispatch(updateSort(sort));
    dispatch(getAllProducts({ filter, sort }));
  };

  useEffect(() => {
    if(firstRender) {
        setFirstRender(!firstRender);
    }else {
        handleSort(sortType, sortKind);
    }
  
  }, [sortType, sortKind])
  

  return (
    <Form className="mb-10 flex justify-end items-center justify-items-start gap-2">
      <Form.Text className="mt-0">Order by:</Form.Text>
      <Form.Select
        aria-label="Select kind"
        value={sortKind}
        onChange={(e) => setSortKind(e.target.value)}
        className="w-auto"
      >
        <option value="name">Name</option>
        <option value="minium_price">Price</option>
        <option value="time-closing">Time closing</option>
        <option value="created">Created</option>
      </Form.Select>
      <button onClick={() => handleSortType()} type="button">
        {sortType === "DESC" && <ArrowUp />}
        {sortType === "ASC" && <ArrowDown />}
      </button>
    </Form>
  );
}

export default SortBar;
