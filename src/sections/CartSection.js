import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CartSection = () => {
  return (
    <Card className="border-0 shadow bg-body w-100 px-4 pt-3">
      <Card.Body className="px-0 py-2">
        <Card.Title className="d-flex justify-content-between">
          CART
          <i className="fa-solid fa-bag-shopping"></i>
        </Card.Title>

        <div
          className="cart d-flex justify-content-center align-items-center"
          style={{ height: "61.8vh" }}
        >
          <p className="text-center">What's stopping you, designer?</p>
        </div>

        <Row>
          <Col sm={12} md={8} lg={5} xl={4} className="pe-0 mb-1">
            <span className="fw-light text-muted">
              <i className="fa-solid fa-location-dot me-2"></i>
              <small>Home</small>
            </span>
          </Col>
          <Col sm={12} md={10} lg={7} xl={4.5} className="pe-0">
            <span className="fw-light text-muted">
              <i className="fa-solid fa-calendar me-2"></i>
              <small>Select date</small>
            </span>
          </Col>
        </Row>

        <Button
          variant="dark"
          size="sm"
          disabled={true}
          className="d-block mt-4 mb-2 mx-auto"
        >
          Order Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartSection;
