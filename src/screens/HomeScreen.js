import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Container
      style={{
        width: "86vw",
      }}
    >
      <Row
        className="mt-3 mb-4 shadow-sm px-3 pb-4"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <Col sm={2} md={1} lg={1} xl={1}></Col>
        <Col sm={10} md={8} lg={5} xl={5}>
          <h1 className="mb-4" style={{ marginTop: "10vw" }}>
            Welcome to <strong>KICKSUP</strong>
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            nesciunt eos nulla similique mollitia quae iure voluptatem, soluta
            dicta fuga quam laboriosam necessitatibus!
          </p>
          <Button variant="outline-success">
            GET STARTED
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </Button>
        </Col>
        <Col
          sm={10}
          md={8}
          lg={5}
          xl={5}
          className="mx-auto d-flex flex-column justify-content-center align-items-center"
        >
          <Image
            className="w-100 mx-auto"
            src={`${process.env.PUBLIC_URL}/images/team-members/ikercasillas.jpg`}
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
