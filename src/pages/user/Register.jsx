import Form from "react-bootstrap/Form";
import { selectIsAuthenticate, register } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticate = useSelector(selectIsAuthenticate);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 min-h-[100vh] flex justify-center items-center">
        <div className="max-w-[500px] md:min-w-[350px] h-auto relative isolate">
          <div className="absolute -inset-8 bg-white/95 -z-10 rounded-md shadow-md shadow-neutral-600"></div>
          <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 ">
            Register
          </h1>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              dispatch(register({ username, password, email, passwordConfirm }));
              if (isAuthenticate) {
                navigate("/");
              }
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password Confirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </Form.Group>

            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white py-2 px-3 rounded-lg mx-auto block shadow-sm shadow-sky-700"
            >
              Login
            </button>
          </Form>
          <div className="flex justify-between mt-4 gap-4">
            <p>
              Already have account? Login {""}
              <Link to={"/login"}>here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
