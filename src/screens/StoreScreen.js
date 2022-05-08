import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FilteringSection from "../sections/FilteringSection";
import DisplaySection from "../sections/DisplaySection";
import CartSection from "../sections/CartSection";
import DesignSpaceSection from "../sections/DesignSpaceSection";

const StoreScreen = () => {
  const [shoe, setShoe] = useState();
  const [showDesignSpace, setShowDesignSpace] = useState(false);

  return (
    <Container fluid={true} className="pt-2">
      <Row xs={12}>
        {!showDesignSpace ? (
          <>
            <Col xs={3}>
              <FilteringSection />
            </Col>
            <Col xs={6}>
              <DisplaySection
                setShoe={setShoe}
                setShowDesignSpace={setShowDesignSpace}
              />
            </Col>
          </>
        ) : (
          <Col xs={9}>
            <DesignSpaceSection
              shoe={shoe}
              setShowDesignSpace={setShowDesignSpace}
            />
          </Col>
        )}
        <Col xs={3}>
          <CartSection />
        </Col>
      </Row>
    </Container>
  );
};

export default StoreScreen;
