import Nav from "react-bootstrap/Nav";
import { Envelope, Telephone } from "react-bootstrap-icons";

export const NavBar = ({ level }) => {
  let linkName = "blackLink";
  switch (level) {
    case "Landing":
    case "DataViz":
      linkName = "blackLink";
      break;

    case "Portfolio":
      linkName = "orangeLink";
      break;

    default:
      linkName = "blackLink";
      break;
  }
  return (
    <>
      <Nav id="navbar" className="panel">
        <Nav.Item>
          <Nav.Link
            href="mailto:enquiries@drt-software.com"
            className={linkName}
          >
            <Envelope /> : enquiries@drt-software.com
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={linkName}>
            <Telephone /> : 0115 8840440
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
