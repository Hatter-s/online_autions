import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSellerOrders,
  selectBuyerOrders,
  getFullOrderOfUser,
} from "@/app/slice/ordersSlice";
import { selectUserId } from "../../userSlice";

import SellerOrders from "./components/SellerOrders";
import BuyerOrders from "./components/BuyerOrders";

const Orders = () => {
  const dispatch = useDispatch();
  const sellerOrders = useSelector(selectSellerOrders);
  const buyerOrders = useSelector(selectBuyerOrders);
  const userId = useSelector(selectUserId);

  useEffect(() => {
    if (userId !== 0) {
      dispatch(getFullOrderOfUser(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className="my-10">
      <h1>Orders</h1>
      <SellerOrders orders={sellerOrders} />
      <BuyerOrders orders={buyerOrders} />
    </div>
  );
};

export default Orders;
