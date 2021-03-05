import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Card } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import { listProducts } from "../actions/productActions";
import introImage from "../markers/cash.png";

const HomeScreen = ({ match }) => {
  const [type, setType] = useState("popular");

  const selectType = (category) => {
    setType(category);
  };

  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const productFilter =
    products &&
    products.length >= 1 &&
    products.filter((cat) => cat.filter === type);
  console.log(productFilter);

  return (
    <>
      <Row className="homepage_row">
        <Col xs={12} sm={9} className="homepage_text_col">
          <div className="homepage_intro_text">
            <h1>Budget Friendly.</h1>
            <p className="homepage_intro_subtext">
              Filter Available Parker's safe-parking depending on your budget
              and area
            </p>
          </div>
        </Col>
        <Col xs={12} sm={3}></Col>
      </Row>
      {!keyword ? (
        <h2 className="filter_text">
          Need Parking in your budget? Filter them out
        </h2>
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <div className="filter_btn_container">
              <Col xs={4} sm={4}>
                <Button
                  className={
                    type === "popular"
                      ? "btn btn-lg btn-success p-3"
                      : "btn btn-lg btn-dark"
                  }
                  onClick={() => {
                    selectType("popular");
                  }}
                >
                  POPULAR
                </Button>
              </Col>
              <Col xs={4} sm={4}>
                <Button
                  className={
                    type === "goodPrice"
                      ? "btn btn-lg btn-success p-3"
                      : "btn btn-lg btn-dark"
                  }
                  onClick={() => {
                    selectType("goodPrice");
                  }}
                >
                  GOOD PRICE
                </Button>
              </Col>
              <Col xs={4} sm={4}>
                <Button
                  className={
                    type === "budget"
                      ? "btn btn-lg btn-success p-3"
                      : "btn btn-lg btn-dark"
                  }
                  onClick={() => {
                    selectType("budget");
                  }}
                >
                  BUDGET
                </Button>
              </Col>
            </div>
          </Row>
          <hr />
          <Row className="mb-4">
            {products
              .filter((cat) => cat.filter === type)
              .map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
