import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDisplayOfferModal,
  toggleOfferModal,
  selectCurrentProduct,
} from "../productsSlice";
import { selectUser } from "@/pages/user/userSlice";

function OfferModal() {
  const dispatch = useDispatch();
  const displayOfferModal = useSelector(selectDisplayOfferModal);
  const currentProduct = useSelector(selectCurrentProduct);
  const currentUser = useSelector(selectUser);

  useEffect(() => {
    setOfferPrice(currentProduct.minium_price);
  }, [currentProduct])
  
  const [offerPrice, setOfferPrice] = useState(0);

  const checkOfferValid = (offerPrice) => {
    if (
      offerPrice > currentUser.balance ||
      offerPrice < currentProduct.minium_price
    ) {
      return false;
    }

    return true;
  };

  const closeModal = () => {
    dispatch(toggleOfferModal())
  };
  return (
    <Modal show={displayOfferModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Make Offer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          id="makeOffer"
          onSubmit={(e) => {
            e.preventDefault();
            if (checkOfferValid(offerPrice)) {
              closeModal();
            }
          }}
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
