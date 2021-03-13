import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light" style={{ boxShadow: "0px 0px 5px black" }}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy;{" "}
            <strong>
              <i>Parker</i>
            </strong>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
