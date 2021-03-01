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
import popular from "../markers/popular.jpg";
import goodPrice from "../markers/goodPrice.jpg";
import budget from "../markers/budget.jpg";
import introImage from "../markers/towtruck2.png";

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
        <Col xs={12} sm={4} className="homepage_text_col">
          <div className="homescreen_text">
            <h1>Save</h1>
            <blockquote class="blockquote">
              <p className="mb-0">
                Save Yourself from Challans and Towing
                <br /> Parker helps you and save you car and money from getting
                wasted
              </p>
              <footer className="blockquote-footer">
                <cite title="Source Title">AI Jourgensen</cite>
              </footer>
            </blockquote>
          </div>
        </Col>
        <Col xs={12} sm={8} className="homepage_img_col">
          <img className="homepage_images" src={introImage} alt="intro_image" />
        </Col>
      </Row>
      {!keyword ? (
        <h1>Need Parking? Filter them out</h1>
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
            <Col xs={6} sm={4}>
              <Card
                className={
                  type === "popular" ? "category_tab_selected" : "category_tab"
                }
              >
                <img
                  className="category_tab_img"
                  onClick={() => {
                    selectType("popular");
                  }}
                  src={popular}
                  alt="popular"
                />
                <Card.Title
                  onClick={() => {
                    selectType("popular");
                  }}
                  className="category_tab_text"
                >
                  Popular
                </Card.Title>
              </Card>
            </Col>
            <Col xs={6} sm={4}>
              <Card
                className={
                  type === "goodPrice"
                    ? "category_tab_selected"
                    : "category_tab"
                }
              >
                <img
                  className="category_tab_img"
                  onClick={() => {
                    selectType("goodPrice");
                  }}
                  src={goodPrice}
                  alt="goodPrice"
                />
                <Card.Title
                  onClick={() => {
                    selectType("goodPrice");
                  }}
                  className="category_tab_text"
                >
                  Good Price
                </Card.Title>
              </Card>
            </Col>
            <Col xs={12} sm={4}>
              <Card
                className={
                  type === "budget" ? "category_tab_selected" : "category_tab"
                }
              >
                <img
                  className="category_tab_img"
                  onClick={() => {
                    selectType("budget");
                  }}
                  src={budget}
                  alt="budget"
                />
                <Card.Title
                  onClick={() => {
                    selectType("budget");
                  }}
                  className="category_tab_text"
                >
                  Budget
                </Card.Title>
              </Card>
            </Col>
          </Row>
          <hr />
          <Row>
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
