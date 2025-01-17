import { Form, Row, Col, Container } from "react-bootstrap";
//import { useState } from "react";

const CitySelect = function ({ onCityChange }) {
    const handleCityChange = (event) => {
      const selectedCity = event.target.value;
      onCityChange(selectedCity); 
    };


  return (
    <>
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1 className=" my-1 fs-4">Dove ti trovi?</h1>
          <Form.Select aria-placeholder="Seleziona la città" onChange={handleCityChange}>
            <option>Parigi</option>
            <option>New York</option>
            <option>Istanbul</option>
            <option>New Delhi</option>
            <option>Sidney</option>
          </Form.Select>
        </Col>
      </Row>
      </Container>
    </>
  );
};
export default CitySelect;