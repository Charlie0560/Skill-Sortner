import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import Cards from "../Cards/Cards";
import "./home.css";
function Home() {
  const [filter, setFilter] = useState("All");

  const handleFilter = (value) => {
    setFilter(value);
  };
  return (
    <div className="container">
      <center>
        <div className="filterdiv">
          <InputGroup className="mt-3">
            <FormControl
              placeholder="Search By Name"
              aria-label="Search By Name"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </div>
      </center>
      <div className="mt-5">
        <Row>
          <Col sm={2} className="filter">
            <div>
              <h5>Filter</h5>
              <Form.Check
                aria-label="option 1"
                label="All"
                onClick={() => handleFilter("All")}
                checked
              />
              <Form.Check
                aria-label="option 2"
                label="Web developer"
                onClick={() => handleFilter("Web Developer")}
              />
              <Form.Check
                aria-label="option 3"
                label="App developer"
                onClick={() => handleFilter("App Developer")}
              />
              <Form.Check
                aria-label="option 4"
                label="Game Developer"
                onClick={() => handleFilter("Game Developer")}
              />
              <Form.Check
                aria-label="option 5"
                label="Competitive Programmer"
                onClick={() => handleFilter("Competitive Programmer")}
              />
              <Form.Check
                aria-label="option 6"
                label="Data Analyst"
                onClick={() => handleFilter("Data Analyst")}
              />
              <Form.Check
                aria-label="option 7"
                label="Management"
                onClick={() => handleFilter("Management")}
              />
            </div>
          </Col>
          <Col sm={10} className="profilecards">
            <Cards filter={filter} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
