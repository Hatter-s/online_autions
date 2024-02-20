import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { login, selectIsAuthenticate } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticate = useSelector(selectIsAuthenticate);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 min-h-[100vh] flex justify-center items-center">
        <div className="max-w-[500px] h-auto relative isolate">
          <div className="absolute -inset-8 bg-white/95 -z-10 rounded-md shadow-md shadow-neutral-600"></div>
          <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 ">Login</h1>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(login({ username, password }));
              if (isAuthenticate) {
                navigate("/");
              }
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Text className="text-muted">
                We`&apos;`ll never share your username with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Text className="text-muted">
                <Link to={"/forgot-password"} className="text-current">
                  Forgot password?
                </Link>
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <button type="submit" className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white py-2 px-3 rounded-lg mx-auto block shadow-sm shadow-sky-700">
              Login
            </button>
          </Form>
          <div className="flex justify-between mt-4 gap-4">
            <p>
              Don&apos;t have account? sign up{" "}
              <Link to={"/register"}>here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;