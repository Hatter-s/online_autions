import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateShipping,
  selectShippingStatus,
  resetShippingsCurrentProcess,
} from "@/app/slice/shippingsSlice";

function ShippingStatusModal(props) {
  const dispatch = useDispatch();
  const shippingStatuss = useSelector(selectShippingStatus);
  const [shippingStatus, setShippingStatus] = useState();

  useEffect(() => {
    if (
      shippingStatuss.currentProcess === "update-shipping" &&
      shippingStatuss.status === "succeeded"
    ) {
      dispatch(resetShippingsCurrentProcess());
      props.toggleShow();
    }
  }, [shippingStatuss, props, dispatch]);

  const handleCancel = () => {
    if (props.isDelete === "seller") {
      dispatch(updateShipping({shippingId: props.shippingId,updateData: { status: 1 }}));
    } else if (props.isDelete === "buyer") {
      dispatch(updateShipping({shippingId: props.shippingId,updateData: { status: 2 }}));
    }
  };

  const handleChangeStatus = () => {
    dispatch(updateShipping({shippingId: props.shippingId,updateData: { status: shippingStatus }}));
  };

  return (
    <>
      <Modal show={props.show} onHide={props.toggleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.isDelete && (
            <>
              <p>
                Do your want to cancel this order? (you can do anything with
                order after it)
              </p>
            </>
          )}
          {!props.isDelete && (
            <>
              <Form.Select
                aria-label="Default select example"
                value={shippingStatus}
                defaultValue={-1}
                onChange={(e) => setShippingStatus(e.target.value)}
              >
                <option value={-1} disabled>
                  Open this select menu
                </option>
                <option value={0}>Seller is prepare the order</option>
                <option value={3}>The order is given to shipping unit</option>
                <option value={4}>The order is on the way to you</option>
              </Form.Select>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.toggleShow}>
            Close
          </Button>
          {props.isDelete && (
            <>
              <Button
                variant="outline-danger"
                type="button"
                onClick={() => handleCancel()}
              >
                Agree
              </Button>
            </>
          )}
          {!props.isDelete && (
            <>
              <Button variant="primary" onClick={() => handleChangeStatus()}>
                Save Changes
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShippingStatusModal;
