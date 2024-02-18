import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./userSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function User() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password , setPassword ] = useState('');

  return (
    <>
      <h1>Hello world!</h1>
      <Form onSubmit={(e) => {
            e.preventDefault();
            dispatch(login({username, password}));
        }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Form.Text className="text-muted">
            We`&apos;`ll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Button onClick={() => dispatch(logout())}>Logout</Button>

      { user.username !== '' && <div>
        <h2>{ user.username} </h2>
        <p> {user.email } </p>
      </div> }
    </>
  );
}

export default User;
