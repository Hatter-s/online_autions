import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Heart } from "react-bootstrap-icons";

import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../../pages/user/userSlice";
import { Link, useNavigate } from "react-router-dom";

function DefaultNavbar() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" sticky="top" className="bg-gradient-to-r from-blue-400">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          Onl-Auc
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav nav-end">
          <Nav className="me-auto flex items-center justify-between w-full">
            <div className="flex">
              <Link to={"/"} className="no-underline">
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
            </div>

            {/* NOT LOGIN */}
            {!user.username && (
              <div className="">
                <Button variant="outline-primary" className="mr-4 btn-sm" onClick={() => navigate('/login')}>
                  Login
                </Button>
                <Button variant="warning" className="btn-sm" onClick={() => navigate('/register')}>
                  Register
                </Button>
              </div>
            )}

            {/* WAS LOGIN */}
            {user.username && (
              <div className="flex gap-2 justify-start items-center">
                <div className="wishlist">
                  <Heart />
                </div>
                <NavDropdown title={user.username} id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <div className="flex justify-between items-center">
                      <Button variant="outline-primary" className="btn-sm">
                        +
                      </Button>
                      <div>{user.balance} $</div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    User Infomation
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => dispatch(logout())}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DefaultNavbar;