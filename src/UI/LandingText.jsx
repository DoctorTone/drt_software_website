import React from "react";
import Button from "react-bootstrap/Button";
import useStore from "../state/store";
import { ArrowRight } from "react-bootstrap-icons";
import { ArrowDown } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const LandingText = () => {
  const setCurrentLevel = useStore((state) => state.setCurrentLevel);
  const enterLevel = useStore((state) => state.enterLevel);

  const nextLevel = () => {
    setCurrentLevel("Portfolio");
    enterLevel(true);
  };

  return (
    <>
      <Navbar id="navbar" expand="lg" className="panel">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about_me">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#why_3d">3D?</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#tech">Technology</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container id="landingText" className="panel">
        <Row>
          <Col xs={12} md={6} className="lightGreyText">
            <div className="titleFont">Welcome.</div>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={{ span: 6, offset: 6 }}
            className="lightGreyText titleSpacing"
          >
            <h3>I'm Tony.</h3>
            <h3>I do all things 3D.</h3>
          </Col>
        </Row>
        <Row className="text-center mt-md-4">
          <Col>
            <h5 className="orangeText">
              Scroll to find out more. <ArrowDown />
            </h5>
          </Col>
          <Col>
            <Button variant="warning" onClick={nextLevel}>
              <h5 className="pt-1">
                Check my Portfolio <ArrowRight />{" "}
              </h5>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingText;
