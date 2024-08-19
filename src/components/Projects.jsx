import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArchiveFill, ThreeDots, BrightnessHigh } from "react-bootstrap-icons";
import Image from "react-bootstrap/Image";

const Projects = () => {
  return (
    <div className="darkBackground pt-4 whiteText">
      <a id="projects"></a>
      <Container>
        <Row>
          <ArchiveFill color="orange" size="36" />
        </Row>
        <Row className="mb-1">
          <h5 className="whiteText">Projects</h5>
          <h2 className="greyerText">Previous</h2>
          <hr></hr>
        </Row>
        <Row className="mb-3">
          <Col xs={6} md={4} className="mb-3 text-center">
            <Image
              src="./images/configurator.jpg"
              rounded
              fluid
              className="mb-2"
            />
            <h6>3D Configurators</h6>
          </Col>
          <Col xs={6} md={4} className="mb-3 text-center">
            <Image src="./images/solar.jpg" rounded fluid className="mb-2" />
            <h6>Simulation</h6>
          </Col>
          <Col xs={6} md={4} className="mb-3 text-center">
            <Image src="./images/museum.jpg" rounded fluid className="mb-2" />
            <h6>Virtual Exhibits</h6>
          </Col>
          <Col xs={6} md={4} className="mb-3 text-center">
            <Image src="./images/physics.jpg" rounded fluid className="mb-2" />
            <h6>Physics</h6>
          </Col>
          <Col xs={6} md={4} className="mb-3 text-center">
            <Image src="./images/brain.jpg" rounded fluid className="mb-2" />
            <h6>3D Data Visualisation</h6>
          </Col>
          <Col xs={6} md={4} className="mb-3 text-center">
            <Image
              src="./images/portfolio.jpg"
              rounded
              fluid
              className="mb-2"
            />
            <h6>3D Websites</h6>
          </Col>
        </Row>
      </Container>
      <Container className="greyerText">
        <Row className="mb-1">
          <Col xs={1} className="text-center">
            <BrightnessHigh color="orange" size={20} />
          </Col>
          <Col xs={11}>
            A virtual reality museum application for the art world allowing
            multiple participants to view exhibits as if they were real and in
            immersive VR.
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={1} className="text-center">
            <BrightnessHigh color="orange" size={20} />
          </Col>
          <Col xs={11}>
            3D editors and interface tools for the construction industry.
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={1} className="text-center">
            <BrightnessHigh color="orange" size={20} />
          </Col>
          <Col xs={11}>
            3D data visualisations for things such as climate data, finance,
            sports, music and a whole lot more.
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={1} className="text-center">
            <BrightnessHigh color="orange" size={20} />
          </Col>
          <Col xs={11}>
            A 3D product configurator for the bathroom industry.
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={1} className="text-center">
            <BrightnessHigh color="orange" size={20} />
          </Col>
          <Col xs={11}>
            Medical imaging applications for detecting and measuring tumours.
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={1} className="text-center">
            <BrightnessHigh color="orange" size={20} />
          </Col>
          <Col xs={11}>
            Virtual environments for collaborative gaming, social interaction,
            video communication and more.
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={1} className="text-center">
            <BrightnessHigh color="orange" size={20} />
          </Col>
          <Col xs={11}>
            3D websites to give your company or brand a competitive edge.
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={1} className="text-center">
            <BrightnessHigh color="orange" size={20} />
          </Col>
          <Col xs={11}>
            3D scene editors, graphical tools, games for children with autism,
            driving simulators and even a brain surgery simulator!
          </Col>
        </Row>
        <Row className="text-center mt-5 whiteText">
          <p>
            These are some of the people I've been fortunate enough to work
            with:
          </p>
        </Row>
        <Row className="mb-3 align-items-center">
          <Col
            xs={6}
            md={4}
            lg={3}
            xl={{ span: 2, offset: 1 }}
            className="mb-2"
          >
            <Image src="./images/logo_uon_dark.png" rounded fluid />
          </Col>
          <Col xs={6} md={4} lg={3} xl={2} className="mb-2">
            <Image src="./images/iosh.png" rounded fluid />
          </Col>
          <Col xs={6} md={4} lg={3} xl={2} className="mb-3">
            <Image src="./images/ThrillLab.jpg" rounded fluid />
          </Col>
          <Col xs={6} md={4} lg={3} xl={2} className="mb-2">
            <Image src="./images/logo_imh.png" rounded fluid />
          </Col>
          <Col xs={6} md={4} lg={3} xl={2} className="mb-2">
            <Image src="./images/NHS_Logo.png" rounded fluid />
          </Col>
        </Row>
        <Row>
          <ThreeDots className="mb-3" color="orange" size="36" />
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
