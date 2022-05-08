import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import CustomRadio from "../components/CustomRadio";

const DesignSpaceSection = ({ shoe, setShowDesignSpace }) => {
  const variants = ["variant1", "variant2", "variant3"];
  const sizes = [7, 8, 9, 10];

  const [front, setFront] = useState(variants[0]);
  const [middle, setMiddle] = useState(variants[0]);
  const [back, setBack] = useState(variants[0]);
  const [sole, setSole] = useState(variants[0]);
  const [size, setSize] = useState(sizes[1]);

  return (
    <Card className="border-0 shadow w-100 px-4 pt-3 pb-2">
      <Card.Body className="py-2" style={{ paddingLeft: "3rem" }}>
        <Row className="position-relative mb-2">
          <span
            className="position-absolute"
            style={{ left: "-3rem", top: "-0.2rem" }}
          >
            <i
              className="fa-solid fa-angle-left fa-2x"
              type="button"
              onClick={() => setShowDesignSpace(false)}
            ></i>
          </span>
          <Card.Title className="fw-normal">Your Design Space</Card.Title>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={9} xl={6}>
            <Card.Img
              src={`${process.env.PUBLIC_URL}/images/shoes/${shoe.imgName}`}
              style={{
                aspectRatio: "64/63",
              }}
            />
          </Col>
          <Col xs={2} className="d-flex flex-column justify-content-between">
            <Card.Img
              src={`${process.env.PUBLIC_URL}/images/shoes/${shoe.imgName}`}
            />
            <Card.Img
              src={`${process.env.PUBLIC_URL}/images/shoes/${shoe.imgName}`}
            />
            <Card.Img
              src={`${process.env.PUBLIC_URL}/images/shoes/${shoe.imgName}`}
            />
          </Col>
          <Col xs={4}>
            <h4 className="fw-normal mb-0">{shoe.name}</h4>
            <p className="fw-light mb-2">by KICKSUP</p>

            <Rating value={shoe.rating} />
            <p style={{ fontSize: "0.65rem" }}>80 reviews</p>

            <small>Rs. {shoe.price}/-</small>
            <p style={{ fontSize: "0.65rem" }}>
              Get an exclusive 20% off shopping with HDFC bank
            </p>

            <Row className="my-2 d-flex align-items-center">
              <Col sm={12} md={6} lg={4} xl={3} className="pe-0">
                Front
              </Col>
              <Col sm={12} md={10} lg={8} xl={9}>
                <CustomRadio
                  options={variants}
                  defaultValue={front}
                  onChange={(e) => setFront(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="my-2 d-flex align-items-center">
              <Col sm={12} md={6} lg={4} xl={3} className="pe-0">
                Middle
              </Col>
              <Col sm={12} md={10} lg={8} xl={9}>
                <CustomRadio
                  options={variants}
                  defaultValue={middle}
                  onChange={(e) => setMiddle(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="my-2 d-flex align-items-center">
              <Col sm={12} md={6} lg={4} xl={3} className="pe-0">
                Back
              </Col>
              <Col sm={12} md={10} lg={8} xl={9}>
                <CustomRadio
                  options={variants}
                  defaultValue={back}
                  onChange={(e) => setBack(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="my-2 d-flex align-items-center">
              <Col sm={12} md={6} lg={4} xl={3} className="pe-0">
                Sole
              </Col>
              <Col sm={12} md={10} lg={8} xl={9}>
                <CustomRadio
                  options={variants}
                  defaultValue={sole}
                  onChange={(e) => setSole(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="my-2 d-flex align-items-center">
              <Col sm={12} md={6} lg={4} xl={3} className="pe-0">
                Size
              </Col>
              <Col sm={12} md={10} lg={8} xl={9}>
                <CustomRadio
                  options={sizes}
                  defaultValue={size}
                  showValue={true}
                  onChange={(e) => setSize(e.target.value)}
                />
              </Col>
            </Row>
            <div className="d-flex align-items-center"></div>
          </Col>
        </Row>

        <Row>
          <div className="d-flex gap-3 mt-2 mb-3">
            <span>Rate product</span>
            <Rating value={0} />
          </div>

          <div className="d-flex justify-content-center gap-3">
            <Button variant="outline-dark" size="sm">
              Share Design
            </Button>
            <Button variant="dark" size="sm">
              Add To Cart
            </Button>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DesignSpaceSection;
