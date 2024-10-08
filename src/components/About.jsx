import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Stars, ThreeDots } from "react-bootstrap-icons";

const About = () => {
  return (
    <div className="whiteBackground blackText pt-3">
      <a id="about_me"></a>
      <Container>
        <Row className="mb-3">
          <Stars color="orange" size="30" />
        </Row>
        <Row className="mb-3">
          <Col xs={12}>
            <h5>About</h5>
            <h2 className="mb-4">I'm Dr Tony Glover</h2>
            <hr></hr>
            <div className="text-center">
              <Image
                className="portrait"
                src="./images/profile.jpg"
                fluid
                roundedCircle
              />
            </div>
          </Col>
          <Col xs={12} className="pt-3">
            <p>
              I have more than 25 years experience in the software development
              industry. I am passionate about all things 3D - my mission is to
              create stunning interactive websites that showcase the power of 3D
              graphics.
            </p>
            <p>
              I formed DRT in 2017 to provide 3D data visualisation services to
              a number of companies. Since then I've had the pleasure of working
              with some amazing people on all sorts of wonderful projects.
            </p>
            <p>
              I've worked with clients in both small and large companies, as
              well as start-ups and academic institutions. I've worked on a
              diverse array of projects including 3D editors for the
              construction industry, data visualisation applications, virtual
              museum exhibits, driving simulators, mental health trials and even
              a brain surgery simulator!
            </p>
            <p>
              I'm always open to new project ideas and collaborations and would
              love to hear from you if you have an exciting and challenging
              project that you need some help with. Feel free to get in touch.
            </p>
          </Col>
        </Row>
        <Row>
          <ThreeDots className="mb-3" color="orange" size="36" />
        </Row>
      </Container>
    </div>
  );
};

export default About;
