import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Frame } from "framer";
import TransSide from "./TransSide";

const Product = ({ product }) => {
  return (
    <TransSide inX="-100%">
      <Card className="my-3 rounded product_card">
        {product.filter ? (
          <span
            style={{
              position: "absolute",
              right: "20px",
              top: "10px",
            }}
            className="badge badge-warning h3"
          >
            {" "}
            {product.filter.toUpperCase()}
          </span>
        ) : (
          ""
        )}
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div" className="product_card_title">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="h3">{product.price} Rs</Card.Text>
        </Card.Body>
      </Card>
    </TransSide>
  );
};

export default Product;
