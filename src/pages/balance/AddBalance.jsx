import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeBalanceModal, selectBalanceModalStatus, updateBalance, selectUser } from "../user/userSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddBalance() {
  const dispatch = useDispatch();
  const balanceModalStatus = useSelector(selectBalanceModalStatus);
  const user = useSelector(selectUser);
    const [balance, setBalance] = useState(1);
  const closeModal = () => {
    dispatch(closeBalanceModal());
  };
  

  if (balanceModalStatus) {
    return (
      <>
        <Modal show={balanceModalStatus} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add balance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="addBalance" onSubmit={(e) => {
                e.preventDefault();
                dispatch(updateBalance({userId: user.id,updateBalance: {balance: user.balance + Number(balance)}}));
                closeModal();
            }}>
              <Form.Group
                className=" flex flex-row items-center gap-4 justify-center"
                controlId="AddBalanceForm"
              >
                <Form.Label className="mb-0">Add: </Form.Label>
                <Form.Control type="number" value={balance} onChange={(e) => setBalance(e.target.value)} className="text-end max-w-24" min={1}/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <input type="submit" form="addBalance" className="text-gray-600 bg-gradient-to-r from-blue-400 hover:opacity-90 p-2 rounded-md border" />
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  return null;
}

export default AddBalance;
