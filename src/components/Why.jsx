import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BoxFill,
  ThreeDots,
  Mouse2Fill,
  EyeFill,
  PencilFill,
  PeopleFill,
  BookHalf,
  TrophyFill,
} from "react-bootstrap-icons";

const Why = () => {
  return (
    <div className="darkBackground">
      <a id="why_3d"></a>
      <Container className="text-center">
        <Row className="pt-4">
          <BoxFill color="orange" size="50" />
        </Row>
        <Row>
          <div className="text-start ">
            <h5 className="whiteText">Why 3D?</h5>
            <h2 className="mb-4 greyerText">Why Use 3D?</h2>
          </div>
          <hr></hr>
          <Col xs={12} md={6} lg={4}>
            <Mouse2Fill
              className="mb-3 greyBackground px-3 rounded"
              color="orange"
              size="60"
            />
            <p className="h5 mb-3 whiteText">Enhanced engagement</p>
            <p className="greyText mb-5">
              Users can explore and interact with realistic 3D models, making
              the experience more memorable, and feel more involved.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <EyeFill
              className="mb-3 greyBackground px-3 rounded"
              color="orange"
              size="60"
            />
            <p className="h5 mb-3 whiteText">Improved visualisation</p>
            <p className="greyText mb-5">
              Products can be represented realistically and viewed from any
              angle. Complex data can be simplified and shared for a better
              understanding.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <PencilFill
              className="mb-3 greyBackground px-3 rounded"
              color="orange"
              size="60"
            />
            <p className="h5 mb-3 whiteText">Innovative Branding</p>
            <p className="greyText mb-5">
              There are more innovative ways to represent your products. This
              can greatly enhance the appearence compared to a traditional
              website.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <PeopleFill
              className="mb-3 greyBackground px-3 rounded"
              color="orange"
              size="60"
            />
            <p className="h5 mb-3 whiteText">Increased visitors</p>
            <p className="greyText mb-5">
              The interactive and engaging nature of the site will encourage
              more users. Once there, they will be more tempted to stay
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <BookHalf
              className="mb-3 greyBackground px-3 rounded"
              color="orange"
              size="60"
            />
            <p className="h5 mb-3 whiteText">Compelling experiences</p>
            <p className="greyText mb-5">
              Visitors can explore interacive elements providing increased depth
              and context.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <TrophyFill
              className="mb-3 greyBackground px-3 rounded"
              color="orange"
              size="60"
            />
            <p className="h5 mb-3 whiteText">Competitive edge</p>
            <p className="greyText mb-5">
              3D interactive websites can provide a distinct advantage over a
              more conventional website.
            </p>
          </Col>
        </Row>
        <ThreeDots className="mb-4" color="orange" size="30" />
        <hr className="orangeText m-0"></hr>
      </Container>
    </div>
  );
};

export default Why;
