import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Links = () => {
  const [showLinks, setShowLinks] = useState(false);

  const showDemoLinks = (event) => {
    event.preventDefault();

    setShowLinks(true);
  };

  const handleClose = () => {
    setShowLinks(false);
  };
  return (
    <>
      <div id="links" className="panel">
        <Button onClick={showDemoLinks} variant="dark">
          Links
        </Button>
      </div>
      <Offcanvas show={showLinks} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Links;
