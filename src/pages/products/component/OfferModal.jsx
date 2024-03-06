import { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDisplayOfferModal,
  toggleOfferModal,
  selectCurrentProduct,
} from "../productsSlice";
import { addOrder, selectOrderStatus, resetOrdersCurrentProcess } from "@/app/slice/ordersSlice";
import { selectUser, updateBalance, selectUserStatus, resetUserCurrentProcess } from "@/pages/user/userSlice";

function OfferModal() {
  const dispatch = useDispatch();
  const displayOfferModal = useSelector(selectDisplayOfferModal);
  const currentProduct = useSelector(selectCurrentProduct);
  const currentUser = useSelector(selectUser);
  const orderStatus = useSelector(selectOrderStatus);
  const userStatus = useSelector(selectUserStatus);

  const [offerPrice, setOfferPrice] = useState(0);

  const closeModal = useCallback(() => {
    dispatch(toggleOfferModal())
  }, [dispatch]);

  useEffect(() => {
    setOfferPrice(currentProduct.minium_price);
  }, [currentProduct])

  useEffect(() => {
    if(orderStatus.status === 'succeeded' && orderStatus.currentProcess === 'add-order' ) {
      dispatch(resetOrdersCurrentProcess());
      dispatch(updateBalance({userId: currentUser.id, updateBalance: {balance: currentUser.balance - offerPrice }}))
    } 
  }, [orderStatus, dispatch, currentUser, offerPrice])

  useEffect(() =>{
    console.log(userStatus);
    if(userStatus.status === 'succeeded' && userStatus.currentProcess === 'update-balance' ) {
      dispatch(resetUserCurrentProcess());
      closeModal();
    }
  }, [dispatch, closeModal, userStatus])
  

  const checkOfferValid = (offerPrice) => {
    if (
      offerPrice > currentUser.balance ||
      offerPrice < currentProduct.minium_price
    ) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkOfferValid(offerPrice)) {
      const orderData = {
        buyer_id: currentUser.id,
        seller_id: currentProduct.seller,
        product_id: currentProduct.id,
        offer_price: offerPrice,
        is_fix_price: currentProduct.is_fix_price,
        is_accept: false
      }
      dispatch(addOrder(orderData));
    }
  }


  return (
    <Modal show={displayOfferModal} onHide={closeModal} >
      <Modal.Header closeButton>
        <Modal.Title>Make Offer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          id="makeOffer"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group
            className=" flex flex-row items-center gap-4 justify-center"
            controlId="makeOfferForm"
          >
            <Form.Label className="mb-0">Add: </Form.Label>
            <Form.Control
              type="number"
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              className="text-end max-w-24"
              min={currentProduct.minium_price}
            />
          </Form.Group>
          <input type="submit" id="submit-form" className="hidden" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="makeOffer">
          Make Offer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OfferModal;
