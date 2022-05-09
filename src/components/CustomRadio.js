import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const CustomRadio = ({
  options,
  defaultValue,
  onChange,
  showValue = false,
}) => {
  const [selected, setSelected] = useState();

  useEffect(() => {
    /* Checking whether the default value is part of options */
    /* If not (in this case the index will be -1), nothing is done */
    /* If yes then the corresponding radio button is marked as selected */
    let index = -1;

    options.forEach((option, i) => {
      if (option === defaultValue) {
        return (index = i);
      }
    });

    if (index !== -1) {
      setSelected(index);
    }
    /** **/
  }, [defaultValue, options]);

  /* Function to handle situation when a radio is clicked */
  /* Nothing is done if the marked radio button is clicked */
  /* If different radio button clicked then that is marked as selected */
  const radioSelectHandler = (e) => {
    let index = parseInt(e.target.id.substring(6));

    if (index !== selected) {
      setSelected(index);

      if (onChange !== undefined) {
        e.target.value = options[index];
        onChange(e);
      }
    }
  };
  /** **/

  return (
    /* Displaying the Custom Radio buttons */
    <Row>
      {options.map((option, index) => {
        const styles = {};

        /* Displaying background image if showValue is false else the value */
        if (!showValue) {
          styles.backgroundImage = `url(${process.env.PUBLIC_URL}/images/variants/${option}.png)`;
        } else {
          styles.border = "1px solid rgb(0, 0, 0, 0.85)";
          styles.display = "flex";
          styles.justifyContent = "center";
          styles.alignItems = "center";
        }
        /** **/

        return (
          <Col key={index} sm={6} md={4} lg={3} xl={2} className="pe-0 py-2">
            <div
              id={`radio-${index}`}
              className={`custom-radio${selected === index ? " active" : ""}${
                showValue ? " small" : ""
              }`}
              style={styles}
              onMouseDown={radioSelectHandler}
            >
              {showValue && `${option}`}
            </div>
          </Col>
        );
      })}
    </Row>
    /** **/
  );
};

export default CustomRadio;
