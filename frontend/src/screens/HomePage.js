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
import introMapImage from "../markers/introMapImage.png";
import noParkingImage from "../markers/homePage2.png";
import creditCardImage from "../markers/homePage3.png";
import maps from "../markers/towtruck2.png";
import CurrentLoc from "../components/CurrentLoc";

const HomePage = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const markerIcon = new L.Icon({
    iconUrl: require("../markers/publicparking.png"),
    iconSize: [55, 55],
    iconAnchor: [17, 45],
    popupAnchor: [4, -46],
  });

  const freeParkingIcon = new L.Icon({
    iconUrl: require("../markers/parking.png"),
    iconSize: [35, 35],
    iconAnchor: [17, 45],
    popupAnchor: [4, -46],
  });

  const noParkingIcon = new L.Icon({
    iconUrl: require("../markers/noParking.png"),
    iconSize: [35, 35],
    iconAnchor: [17, 45],
    popupAnchor: [4, -46],
  });

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Row className="homepage_row">
        <Col xs={12} sm={9} className="homepage_text_col">
          <div className="homepage_text">
            <h1 className="homepage_intro_text">Welcome parker !</h1>
            <h2 className="homepage_intro_subtext">
              Be a very firm believer in Karma and put in this way. you will get
              a lot of good parking spots
            </h2>
          </div>
        </Col>
        <Col xs={12} sm={3}></Col>
      </Row>

      <Row className="homepage_row">
        <Col xs={12} sm={3}></Col>
        <Col xs={12} sm={9} className="homepage_text_col">
          <div className="homepage_text">
            <h3>
              Search Parker's safe parkings & Free-parkings nearby your location
            </h3>
          </div>
        </Col>
      </Row>

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
                  <Popup>
                    Free Parking
                    <br />
                    <a
                      target="_blank"
                      className="btn btn-info p-1"
                      href={`http://maps.google.com/?q=${park.lat},${park.lng}`}
                    >
                      Directions
                    </a>
                  </Popup>
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
    </>
  );
};

export default HomePage;
