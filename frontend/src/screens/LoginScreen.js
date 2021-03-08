import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import SignInImage from "../markers/signInBackground.png";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Row className="cart_row">
      <Col lg={3} className="d-none d-lg-block login_left_side">
        <img
          src={SignInImage}
          alt="signInBackgroundImage"
          className="login_image"
        />
        <h4>Login Using Email & Password.</h4>
      </Col>
      <Col sm={12} md={12} lg={9} className="login_right_side">
        <FormContainer>
          <h1>Sign In</h1>
          <hr />
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler} className="login_form_container">
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

            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              <h3>
                New Customer?{" "}
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : "/register"}
                >
                  Register
                </Link>
              </h3>
            </Col>
          </Row>
        </FormContainer>
      </Col>
    </Row>
  );
};

export default LoginScreen;
