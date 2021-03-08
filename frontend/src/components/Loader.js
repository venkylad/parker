import React from "react";
import { Spinner } from "react-bootstrap";
import carLoader from "../markers/Moving car.gif";

const Loader = () => {
  return (
    // <Spinner
    //   animation="border"
    //   role="status"
    //   style={{
    //     width: "100px",
    //     height: "100px",
    //     margin: "auto",
    //     display: "block",
    //   }}
    // >
    //   <span className="sr-only">Loading...</span>
    // </Spinner>
    <div className="loader_container">
      <img src={carLoader} alt="loading" className="loader" />
    </div>
  );
};

export default Loader;
