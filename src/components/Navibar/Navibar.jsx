import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navibar.scss";
import styled from "styled-components";
import LoginPage from "../Auth/LoginPage";
import SigninPage from "../Auth/SigninPage";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #adb1b8;
    &hover {
      color: white;
    }
  }
`;

export default function NaviBar() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSigninPage, setShowSigninPage] = useState(false);
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/" className="LogoName">
              NJFTNL
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={["me-auto", "font-large"]}>
                <Nav.Link as="div">
                  <Link to="/"> Home </Link>
                </Nav.Link>
                <Nav.Link as="div">
                  <Link to="/users"> Users </Link>
                </Nav.Link>
                <Nav.Link as="div">
                  <Link to="/about"> About </Link>
                </Nav.Link>
                <Nav.Link as="div">
                  <Link to="/EmailConfirm"> EmailConfirm </Link>
                </Nav.Link>
              </Nav>
              <Nav className="justify-content-end">
                <Button
                  className="btn-custom me-2"
                  onClick={() => setShowLoginPage(true)}
                >
                  Log In
                </Button>
                <Button
                  className="btn-custom"
                  onClick={() => {
                    setShowSigninPage(true);
                  }}
                >
                  Sign In
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      {showLoginPage && (
        <LoginPage handleClose={() => setShowLoginPage(false)} />
      )}
      {showSigninPage && (
        <SigninPage handleClose={() => setShowSigninPage(false)} />
      )}
    </>
  );
}
