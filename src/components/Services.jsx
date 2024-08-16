import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Tools, HexagonHalf } from "react-bootstrap-icons";

const Services = () => {
  return (
    <div className="lightGreyBackground pb-4">
      <Container className="whiteText">
        <div className="text-center pt-4">
          <Tools color="orange" size="32" />
        </div>
        <h5>Services</h5>
        <h2 className="greyerText">How can I help?</h2>
        <hr></hr>
        <Row className="mb-5">
          <Col xs={1} className="text-end">
            <HexagonHalf color="orange" size="24" />
          </Col>
          <Col xs={3}>
            <p className="greyerText">
              I build highly interactive and engaging 3D graphical web
              applications. I don't just build ordinary websites, I utilise 3D
              graphics technolgy to create immersive experiences.
            </p>
          </Col>
          <Col xs={1} className="text-end">
            <HexagonHalf color="orange" size="24" />
          </Col>
          <Col xs={3}>
            <p className="greyerText">
              I have worked with large and small organisations, start-ups and
              academic institutions to create diverse projects ranging from
              virtual environments to brain surgery simulators.
            </p>
          </Col>
          <Col xs={1} className="text-end">
            <HexagonHalf color="orange" size="24" />
          </Col>
          <Col xs={3}>
            <p className="greyerText">
              I have been involved in all aspects of the development from
              requirements to implementation. I can take your ideas and turn
              them into a viable product. Projects are built to the highest
              quality and delivered on time.
            </p>
          </Col>
          <Col xs={1} className="text-end">
            <HexagonHalf color="orange" size="24" />
          </Col>
          <Col xs={3}>
            <div className="greyerText">
              Do you have an ongoing project that needs to be completed? No
              problem! I can look at your existing codebase and get it done.
            </div>
          </Col>
          <Col xs={1} className="text-end">
            <HexagonHalf color="orange" size="24" />
          </Col>
          <Col xs={3}>
            <div className="greyerText">
              I have a fantastic work ethic, am customer-focused, I provide the
              level of service I would expect myself, and I communicate the
              process every step of the way.
            </div>
          </Col>
          <Col xs={1} className="text-end">
            <HexagonHalf color="orange" size="24" />
          </Col>
          <Col xs={3}>
            <div className="greyerText">
              I offer consultancy services to try and help people decide on the
              best technology choices available and the most applicable to their
              needs.
            </div>
          </Col>
        </Row>
        <div className="mb-3">
          If you would like to discuss a potential project or collaboration or
          would just like to have a conversation about graphics technology in
          general then please get in touch.
        </div>
        <div className="text-center">
          <Button href="mailto:enquiries@drt-software.com">Contact</Button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
