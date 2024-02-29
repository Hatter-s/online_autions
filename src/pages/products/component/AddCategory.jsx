import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategories, addCategory } from "../categoriesSlice";
import { Button, ButtonGroup } from "react-bootstrap";

const AddCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);

  const [category, setCategory] = useState("");
  const [isAddCategory, setIsAddCategory] = useState(false);

  const handleAddCategory = () => {
    const isAvailable = categories.find(c => c === category) ? false : true;

    if (!isAvailable) {
      return new Error("this category is current available");
    }

    dispatch(addCategory(category));
    setIsAddCategory(false);
  };

  if (!isAddCategory) {
    return (
      <button onClick={() => setIsAddCategory(true)} className="underline">add new category</button>
    );
  }

  return (
    <>
      <div className="flex gap-4">
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="outline-none border-b"
        />
        <div>
          <Button
            onClick={() => handleAddCategory()}
            variant="outline-info"
            className="px-2 py-1"
          >
            Add
          </Button>
          <Button
            onClick={() => setIsAddCategory(false)}
            variant="outline-danger"
            className="px-2 py-1"
          >
            Close
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
