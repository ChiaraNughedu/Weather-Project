import { Navbar, Nav, Container } from "react-bootstrap";

const WeatherNav = function () {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="tertiary">
        <Container fluid={true}>
          <Navbar.Brand>
            <img src="/icons8-sole-90.png" alt="Logo" width="70" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <h1 className="text-uppercase fst-italic">EpiWeather</h1>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default WeatherNav;
