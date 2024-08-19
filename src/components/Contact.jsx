import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { TelephoneFill, ThreeDots } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div className="whiteBackground pt-3">
      <a id="contact"></a>
      <Container>
        <Row>
          <TelephoneFill color="orange" size="30" />
        </Row>
        <Row>
          <h5>Contact</h5>
          <h2 className="mb-4">Please get in touch</h2>
          <hr></hr>
        </Row>
        <Form
          className="mt-5"
          action="https://usebasin.com/f/da50ea670849"
          method="POST"
        >
          <Row>
            <Col
              xs={12}
              md={{ span: 2, offset: 2 }}
              className="ps-0-xs ps-5-md"
            >
              <Form.Label className="ps-0-xs ps-5-md">Name</Form.Label>
            </Col>
            <Col xs={12} md={6} className="mb-2">
              <Form.Control
                type="text"
                name="userName"
                placeholder="Enter name"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={{ span: 2, offset: 2 }}
              className="ps-0-xs ps-5-md"
            >
              <Form.Label className="ps-0-xs ps-5-md">Email</Form.Label>
            </Col>
            <Col xs={12} md={6} className="mb-2">
              <Form.Control
                type="email"
                name="userEmail"
                placeholder="name@name.com"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={{ span: 2, offset: 2 }}
              className="ps-0-xs ps-5-md"
            >
              <Form.Label className="ps-0-xs ps-5-md">Phone</Form.Label>
            </Col>
            <Col xs={12} md={6} className="mb-2">
              <Form.Control
                type="tel"
                name="userPhone"
                placeholder="12345 678910"
              />
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={{ span: 2, offset: 2 }}
              className="ps-0-xs ps-5-md"
            >
              <Form.Label className="ps-0-xs ps-5-md">Message</Form.Label>
            </Col>
            <Col xs={12} md={6} className="mb-2">
              <Form.Control type="text" name="userText" />
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={{ span: 2, offset: 2 }} className="ps-5-xs ps-0-md">
              <Button type="submit" className="ms-5-sm ms-0-md mb-3">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        <div className="text-center mb-5">
          <p>
            Alternatively you can email me here{" "}
            <Button href="mailto:enquiries@drt-software.com">Contact</Button> or
            call me on 0115 8840440.
          </p>
        </div>
        <div className="text-center">
          <h6 className="me-0-xs me-5-md">
            I aim to respond within one working day
          </h6>
        </div>
        <Row>
          <ThreeDots color="orange" size="36" />
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
