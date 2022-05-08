import React from "react";
import { Card, Form, Button, Image } from "react-bootstrap";

const FilteringSection = () => {
  return (
    <Card className="border-0 shadow w-100 px-4 pt-3">
      <Card.Body className="px-0 py-2">
        <Card.Title className="d-flex justify-content-between">
          FILTERS
          <i className="fa-solid fa-filter"></i>
        </Card.Title>

        <Card.Title className="mt-4">Cost</Card.Title>
        <Form>
          {["Rs. 1500-4000", "Rs. 4001-7000", "Rs. 7001+"].map((label) => (
            <Form.Check key={label} type="checkbox" label={label} />
          ))}
        </Form>

        <Card.Title className="mt-4">Colour</Card.Title>
        <Form>
          {["red", "blue", "yellow", "green", "gold"].map((color) => (
            <Image
              key={color}
              src={`${process.env.PUBLIC_URL}/images/colors/${color}.png`}
              className="me-3 mb-3"
              width="30px"
              type="button"
            />
          ))}
        </Form>

        <Card.Title className="mt-3">Design templates</Card.Title>
        <Form>
          {["2", "3", "3+"].map((label) => (
            <Form.Check key={label} type="checkbox" label={label} />
          ))}
        </Form>

        <Card.Title className="mt-4">Type</Card.Title>
        <Form>
          {["Loafers", "Sneakers"].map((label) => (
            <Form.Check key={label} type="checkbox" label={label} />
          ))}
        </Form>
        <Button
          variant="dark"
          size="sm"
          className="d-block mb-2 mx-auto"
          style={{ marginTop: "3.3rem" }}
        >
          Apply
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FilteringSection;
