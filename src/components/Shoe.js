import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Rating from "./Rating";

const Shoe = ({ name, price, imgName, rating, onClick }) => {
  return (
    <Card
      className="border-0 mt-2"
      style={{ width: "190px" }}
      type="button"
      onClick={onClick}
    >
      <Card.Img
        height="190px"
        src={`${process.env.PUBLIC_URL}/images/shoes/${imgName}`}
      />
      <Card.Body className="px-0 py-2">
        <Card.Title className="mb-0">{name}</Card.Title>
        <Row>
          <Col>
            <Card.Text className="small">Rs.{price}/-</Card.Text>
          </Col>
          <Col>
            <Rating value={rating} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Shoe;
