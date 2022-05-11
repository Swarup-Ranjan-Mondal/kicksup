import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const CartItemCard = ({ cartItem, removeFromCartHandler }) => {
  return (
    <Row className="item-card mt-3">
      {/* Remove from Cart button (X mark of red color) */}
      <i
        className="fa-regular fa-circle-xmark item-card-xmark"
        onClick={() => removeFromCartHandler(cartItem.itemId, cartItem.size)}
      ></i>

      {/* Cart item's image */}
      <Col sm={12} md={10} lg={5} xl={5} className="px-0">
        <Image
          fluid={true}
          src={`${process.env.PUBLIC_URL}/images/shoes/${cartItem.imgName}`}
          className="border border-1"
        />
      </Col>
      {/** **/}

      <Col sm={0} md={0} lg={1} xl={1} style={{ margin: "0 -0.3rem" }}></Col>

      <Col sm={12} md={12} lg={6} xl={6} className="mt-1 px-0">
        {/* Cart item's name */}
        <h6 className="mb-0">{cartItem.name}</h6>

        {/* Cart item's brand */}
        <p className="mb-1 text-black-50" style={{ fontSize: "0.74rem" }}>
          by {cartItem.brand}
        </p>

        {/* Cart item's size */}
        <small className="d-block mb-1 text-black-50 fw-light">
          Size: {cartItem.size}
        </small>

        {/* Cart item's price */}
        <small className="d-block mb-2">Rs. {cartItem.price}/-</small>
      </Col>
    </Row>
  );
};

export default CartItemCard;
