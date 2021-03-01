import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { freeParkings, noParkings } from "../data/parkingData";
import introImage from "../markers/homePage1.png";
import noParkingImage from "../markers/homePage2.png";
import creditCardImage from "../markers/homePage3.png";
import CurrentLoc from "../components/CurrentLoc";

const HomePage = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const markerIcon = new L.Icon({
    iconUrl: require("../markers/marking.jpg"),
    iconSize: [30, 45],
    iconAnchor: [17, 45],
    popupAnchor: [4, -46],
  });

  const freeParkingIcon = new L.Icon({
    iconUrl: require("../markers/freeParking.png"),
    iconSize: [35, 45],
    iconAnchor: [17, 45],
    popupAnchor: [4, -46],
  });

  const noParkingIcon = new L.Icon({
    iconUrl: require("../markers/no-parking.png"),
    iconSize: [35, 45],
    iconAnchor: [17, 45],
    popupAnchor: [4, -46],
  });

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  console.log(products);

  return (
    <>
      <Row className="homepage_row">
        <Col xs={12} sm={4} className="homepage_text_col">
          <div className="homepage_text">
            <h1>Welcome parker !</h1>
            <blockquote class="blockquote">
              <p className="mb-0">
                I'm a very firm <i>Believer</i> in karma and put in this way. I
                get a lot of good parking spots
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
      <hr />
      <p>****Know Your Location just By Tapping on Map****</p>
      <p>****Tap on Markers to know details****</p>
      <hr />
      <Row>
        <Col sm={12} md={12}>
          <div>
            <MapContainer center={{ lat: 17.385044, lng: 78.486671 }} zoom={20}>
              <TileLayer url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=LO8Ma6cWRDbfY6C4HXDM" />

              {products && products.length >= 1
                ? products.map((product) => (
                    <>
                      <Marker
                        position={{ lat: product.lat, lng: product.lng }}
                        key={product._id}
                        icon={markerIcon}
                      >
                        <Popup>
                          <Link to={`/product/${product._id}`}>
                            <Card.Img src={product.image} variant="top" />
                            <p>{product.name}</p>
                          </Link>
                        </Popup>
                      </Marker>
                    </>
                  ))
                : []}
              <CurrentLoc />
              {console.log(freeParkings)}
              {freeParkings.map((park, i) => (
                <Marker
                  position={{ lat: park.lat, lng: park.lng }}
                  key={i}
                  icon={freeParkingIcon}
                >
                  <Popup>Free Parking</Popup>
                </Marker>
              ))}
              {noParkings.map((park, i) => (
                <Marker
                  position={{ lat: park.lat, lng: park.lng }}
                  key={i}
                  icon={noParkingIcon}
                >
                  <Popup>No Parking</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="homepage_row">
        <Col xs={12} sm={6} className="homepage_img_col">
          <img
            className="homepage_images"
            src={noParkingImage}
            alt="noparking_image"
          />
        </Col>
        <Col xs={12} sm={6} className="homepage_text_col">
          <div className="homepage_text">
            <h2>We Know, how difficult is to find parking in Urban</h2>
            <blockquote class="blockquote">
              <p className="mb-0">
                Don't Risk yourself just by parking your vehicle anywhere.{" "}
                <br /> Use Parker's safe-parks to park your and rent garages for
                sufficient number of hours
              </p>
            </blockquote>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="homepage_row">
        <Col xs={12} sm={6} className="homepage_img_col">
          <img
            className="homepage_images"
            src={creditCardImage}
            alt="noparking_image"
          />
        </Col>
        <Col xs={12} sm={6} className="homepage_text_col">
          <div className="homepage_text">
            <h2>Don't worry about payment</h2>
            <blockquote class="blockquote">
              <p className="mb-0">
                Being a Parker we enable ypu to pay using Credit or Debit Cards,
                or by using paypal and UPI
              </p>
            </blockquote>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
