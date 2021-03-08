import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";
import SignUpImage from "../markers/signUpBackground.png";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password, phone));
    }
  };

  return (
    <main>
      <Row className="cart_row">
        <Col lg={3} className="d-none d-lg-block login_left_side">
          <img
            src={SignUpImage}
            alt="signInBackgroundImage"
            className="login_image"
          />
          <h4>
            Register, Its free <br /> Thanks for choosing us.
          </h4>
        </Col>
        <Col sm={12} md={12} lg={9} className="login_right_side">
          <FormContainer>
            <h1>Sign Up</h1>
            <hr />
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler} className="login_form_container">
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="number">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="primary">
                Register
              </Button>
            </Form>

            <Row className="py-3">
              <Col>
                <h3>
                  Have an Account?{" "}
                  <Link
                    to={redirect ? `/login?redirect=${redirect}` : "/login"}
                  >
                    Login
                  </Link>
                </h3>
              </Col>
            </Row>
          </FormContainer>
        </Col>
      </Row>
    </main>
  );
};

export default RegisterScreen;
