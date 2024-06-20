import Nav from "react-bootstrap/Nav";
import { Envelope, Telephone } from "react-bootstrap-icons";

export const NavBar = () => {
  return (
    <Nav id="navbar" className="justify-content-end panel">
      <Nav.Item>
        <Nav.Link
          href="mailto:enquiries@drt-software.com"
          className="blackLink"
        >
          <Envelope /> : enquiries@drt-software.com
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="blackLink">
          <Telephone /> : 0115 8840440
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
