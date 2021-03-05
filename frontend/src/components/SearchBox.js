import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className="search">
      <Form.Control
        className="search_input"
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search By Street name..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-dark" className="btn btn-light">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
