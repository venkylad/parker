import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import logo from "../markers/publicparking.png";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const logoutHandler = () => {
    dispatch(logout());
  };

  console.log(user);

  return (
    <header>
      <Navbar variant="light" expand="lg" collapseOnSelect className="navbar">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <div className="logo_div">
                <img width="70px" className="logo" src={logo} alt="logo" />
              </div>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route
              render={({ history }) => (
                <SearchBox history={history} className="search_box" />
              )}
            />
            <Nav className="ml-auto">
              <LinkContainer to="/maps">
                <Nav.Link>
                  <i className="fas fa-map-marker"></i> Use-Map
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products">
                <Nav.Link>
                  <i className="fas fa-car"></i> Parkings
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-car"></i> car-t
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && user && userInfo.isAdmin && (
                <NavDropdown title="Provider" id="adminmenu">
                  {userInfo.isProvider && (
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                  )}
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Parks / Add Parks</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
