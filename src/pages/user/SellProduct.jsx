import { useDispatch, useSelector } from "react-redux";
import { selectSellProducts } from "./userSlice";
import ButtonPrimary from "@/components/UI/ButtonPrimary";
import { useNavigate } from "react-router-dom";

const SellProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sellProducts = useSelector(selectSellProducts);

  if (sellProducts.length === 0) {
    return (
      <>
        <div className="flex items-center flex-col mt-10">
            <h1 className="text-gray-700 mb-16">
            You don&apos;t sell any product yet

            </h1>
          <ButtonPrimary type="button" handleClick={() => navigate("/products/add-product")}>
            Add product
          </ButtonPrimary>
        </div>
      </>
    );
  }

  return (
    <>
      <div></div>
    </>
  );
};

export default SellProducts;
