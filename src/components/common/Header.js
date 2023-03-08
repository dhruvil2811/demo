import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Timer from "./Timer";
import { TYPE_OF_TIMER } from "../../utilities/utils";
function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ChatGPT</Navbar.Brand>
          <Timer type={TYPE_OF_TIMER.ONLY_TIME} />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
