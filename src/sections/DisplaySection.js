import React from "react";
import { Row, Col, Card, Button, Nav, Navbar } from "react-bootstrap";
import shoes from "../shoes";
import ShoesProductCard from "../components/ShoesProductCard";

const DisplaySection = ({ setShoe, setShowDesignSpace }) => {
  return (
    <Card className="border-0 shadow w-100 p-3">
      <Card.Body className="p-0">
        {/* Top nav */}
        <Navbar bg="light" expand="lg" className="pt-0 pb-3">
          {/* Main Title */}
          <Navbar.Brand className="m-0">SHOES</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* Search & Sort buttons */}
            <Nav className="ms-auto d-flex">
              <i
                className="fa-solid fa-magnifying-glass me-3 my-auto"
                type="button"
              ></i>
              <Button variant="outline-dark" size="sm">
                Sort By
              </Button>
            </Nav>
            {/** **/}
          </Navbar.Collapse>
        </Navbar>
        {/** **/}

        {/* Displaying Shoes Product Cards */}
        <Row>
          {shoes.map((shoe, i) => (
            <Col key={i} sm={12} md={6} lg={5} xl={4}>
              <ShoesProductCard
                name={shoe.name}
                imgName={shoe.imgName}
                price={shoe.price}
                rating={shoe.rating}
                onClick={(e) => {
                  setShoe(shoe);
                  setShowDesignSpace(true);
                }}
              />
            </Col>
          ))}
        </Row>
        {/** **/}
      </Card.Body>
    </Card>
  );
};

export default DisplaySection;
