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
      <Offcanvas show={showLinks} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Demo Links</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          You can go straight to the level or demo you want by clicking the
          links below:
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Links;
