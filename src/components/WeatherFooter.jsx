import { Container, Row, Col } from "react-bootstrap";

const WeatherFooter = function () {
  return (
    <Container fluid={true}>
      <Row className="mt-3">
        <Col className="text-light fst-italic" xs={12} md={6}>
          <p>&copy; 2025 EpiWeather. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};
export default WeatherFooter;
