import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { selectAlert, autoClose  } from "./alertSlice";

function BasicExample(props) {
    const dispatch = useDispatch();
    const alert = useSelector(selectAlert);

  return (
    <>
      <Alert variant={props.variant ? props.variant : 'info'}>
        { props.children ? props.children : 'this is default alert'}
      </Alert>
    </>
  );
}

export default BasicExample;
