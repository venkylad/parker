import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

const FilterButtons = () => {
  const [type, setType] = useState("all");

  const selectType = (category) => {
    setType(category);
  };

  console.log(type);

  return (
    <Row>
      <Col xs={12} sm={12} md={6}>
        <Row>
          <Col className="m-2">
            <Button
              onClick={() => {
                selectType("all");
              }}
              className="btn-block btn-lg"
            >
              All
            </Button>
          </Col>
          <Col className="m-2">
            <Button
              onClick={() => {
                selectType("popular");
              }}
              className="btn-block btn-lg"
            >
              Popular
            </Button>
          </Col>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={6}>
        <Row>
          <Col className="m-2">
            <Button
              onClick={() => {
                selectType("goodPrice");
              }}
              className="btn-block btn-lg"
            >
              Good Price
            </Button>
          </Col>
          <Col className="m-2">
            <Button
              onClick={() => {
                selectType("budget");
              }}
              className="btn-block btn-lg"
            >
              Budget
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default FilterButtons;
