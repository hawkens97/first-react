import logo from "./logo.svg";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import React from "react";

import image from "./0_cJZQM_W_0w8QiPzD.jfif";
function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Memes</Nav.Link>
            <Nav.Link href="#pricing">more Memes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Form style={{ backgroundColor: "transparent" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="im here for memes" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Get memes
        </Button>
      </Form>
      <img src={image} />
    </div>
  );
}

export default App;
