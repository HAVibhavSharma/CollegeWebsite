import { React, useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import BITImage from "../Images/BIT.png";

function NavBar_(props) {
  const [pageToDisplay, setPageToDisplay] = useState(3);

  useEffect(() => {
    props.pageChange(pageToDisplay);
  }, [pageToDisplay]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid style={{ display: "flex", alignItems: "center" }}>
        <Nav.Link href="#home">
          <img src={BITImage} alt="BIT" />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Nav.Link
              href="#home"
              onClick={() => {
                setPageToDisplay(4);
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#Marks"
              onClick={() => {
                setPageToDisplay(2);
              }}
            >
              Marks
            </Nav.Link>
            <Nav.Link
              href="#Dept"
              onClick={() => {
                setPageToDisplay(2);
              }}
            >
              Attendance
            </Nav.Link>
            <Nav.Link
              href="#Research"
              onClick={() => {
                setPageToDisplay(1);
              }}
            >
              Account
            </Nav.Link>
            <Nav.Link href="#Placements">
              <div style={{ display: "flex" }}>
                <div>Placements</div>
                <div
                  style={{
                    marginLeft: "10px",
                    padding: "2px",
                    borderRadius: "10px",
                    backgroundColor: "red",
                  }}
                >
                  {props.value}
                </div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => {
                setPageToDisplay(3);
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
          <Nav
            // className="me-auto"
            style={{
              marginRight: "45px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <NavDropdown title="Data Portal" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar_;
