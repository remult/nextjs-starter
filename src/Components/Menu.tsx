"use client";

import React from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { isBrowser } from "react-device-detect";

interface MenuProps {}

const Menu: React.FC = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      fixed="top"
      style={{
        fontSize: "1.2rem",
        paddingTop: isBrowser ? "0" : "auto",
        paddingBottom: isBrowser ? "4px" : "auto",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="/"
          className="text-center"
          style={{ fontSize: "1.2rem", paddingLeft: "5px" }}
        >
          דף הבית
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} href="/neworg">
              הגשת עסק חדש
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              אודות
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
