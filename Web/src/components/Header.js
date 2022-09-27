import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    let navigate = useNavigate();
    
    return (
      <div id='intro'>
          <Navbar bg="light" expand="lg">
        {" "}
        <Container>
          <Navbar.Brand href="">
            <img
              classsName="logo"
              src="img/logo.png"
              width="30px"
              height="30px"
            />{" "}
            Hype
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/service");
                }}
              >
                서비스
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/intro");
                }}
              >
                소개
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
  }
  
export default Header;
