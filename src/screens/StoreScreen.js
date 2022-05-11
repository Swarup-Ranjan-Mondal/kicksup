import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import shoesData from "../shoesData";
import FilteringSection from "../sections/FilteringSection";
import DisplaySection from "../sections/DisplaySection";
import CartSection from "../sections/CartSection";
import DesignSpaceSection from "../sections/DesignSpaceSection";

/* Store screen has four sections: */
/* 1. Filtering section */
/* 2. Display section */
/* 3. Design Space section */
/* 4. Cart section */
/* Sections are displayed based on condition */
const StoreScreen = () => {
  const [shoes, setShoes] = useState([]);
  const [shoeToShow, setShoeToShow] = useState();
  const [filters, setFilters] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [showDesignSpace, setShowDesignSpace] = useState(false);

  useEffect(() => {
    /* Filter down the shoes based on selected filters */
    let filteredShoes = shoesData;

    if (filters.cost) {
      filteredShoes = filteredShoes.filter(
        (shoe) =>
          shoe.price >= filters.cost.min && shoe.price <= filters.cost.max
      );
    }

    if (filters.type) {
      filteredShoes = filteredShoes.filter(
        (shoe) => shoe.type === filters.type
      );
    }

    setShoes(filteredShoes);
    /** **/
  }, [filters]);

  useEffect(() => {
    /* Check local storage for cart items */
    /* If present then set them to cartItems state */
    /* If not set an empty array to cartItems state */
    const cartItemsFromStorage = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];

    setCartItems(cartItemsFromStorage);
    /** **/
  }, []);

  return (
    <Container fluid={true} className="pt-2">
      <Row xs={12}>
        {/* If showDesignSpace is false  */}
        {/* Then Filtering and Display sections are displayed  */}
        {/* Else Design Space section is displayed */}
        {!showDesignSpace ? (
          <>
            <Col xs={3}>
              <FilteringSection filters={filters} setFilters={setFilters} />
            </Col>
            <Col xs={6}>
              <DisplaySection
                shoes={shoes}
                setShoeToShow={setShoeToShow}
                setShowDesignSpace={setShowDesignSpace}
              />
            </Col>
          </>
        ) : (
          <Col xs={9}>
            <DesignSpaceSection
              shoeToShow={shoeToShow}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setShowDesignSpace={setShowDesignSpace}
            />
          </Col>
        )}
        {/** **/}

        {/* Cart section is displayed always  */}
        <Col xs={3}>
          <CartSection cartItems={cartItems} setCartItems={setCartItems} />
        </Col>
        {/** **/}
      </Row>
    </Container>
  );
};

export default StoreScreen;
