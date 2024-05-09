import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Youtube, Linkedin } from "react-bootstrap-icons";

export const SocialUI = () => {
  return (
    <div id="social" className="panel pe-1 pe-md-3">
      <div className="mb-3">
        <Button variant="outline-secondary">
          <a href="https://twitter.com/DrtSoftware" target="_blank">
            <Image src="x_twitter.png" className="twitter" />
          </a>
        </Button>
      </div>
      <div className="mb-3">
        <Button variant="outline-dark">
          <a
            className="redLink"
            href="https://www.youtube.com/channel/UCNYHLpd8oKLoE2xw49ZX1nQ?"
            target="_blank"
          >
            <Youtube />
          </a>
        </Button>
      </div>
      <div>
        <Button variant="outline-dark">
          <a href="https://www.linkedin.com/in/tonyglover/" target="_blank">
            <Linkedin />
          </a>
        </Button>
      </div>
    </div>
  );
};
