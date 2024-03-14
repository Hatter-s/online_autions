import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSellerShippings,
  selectBuyerShippings,
  getFullShippingsOfUser,
} from "@/app/slice/shippingsSlice";
import { selectUserId } from "../../userSlice";

import SellerShippings from "./components/SellerShippings";
import BuyerShippings from "./components/BuyerShippings";
import ShippingStatusModal from "./components/ShippingStatusModal";

const Shippings = () => {
  const dispatch = useDispatch();
  const sellerShippings = useSelector(selectSellerShippings);
  const buyerShippings = useSelector(selectBuyerShippings);
  const userId = useSelector(selectUserId);

  const [showStatusModal, setShowStatusModal] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [currentShippingId, setCurrentShippingId] = useState("");
  const toggleStatusModal = () => {
    setShowStatusModal(!showStatusModal);
  };

  useEffect(() => {
    if (userId !== 0) {
      dispatch(getFullShippingsOfUser(userId));
    }
  }, [dispatch, userId]);

  return (
    <>
      <ShippingStatusModal
        show={showStatusModal}
        toggleShow={toggleStatusModal}
        isDelete={isDelete}
        shippingId={currentShippingId}
      />
      <div className="my-10">
        <h1>Shippings</h1>
        <SellerShippings
          shippings={sellerShippings}
          setIsDelete={setIsDelete}
          toggleStatusModal={toggleStatusModal}
          setCurrentShippingId={setCurrentShippingId}
        />
        <BuyerShippings
          shippings={buyerShippings}
          setIsDelete={setIsDelete}
          toggleStatusModal={toggleStatusModal}
          setCurrentShippingId={setCurrentShippingId}
        />
      </div>
    </>
  );
};

export default Shippings;
