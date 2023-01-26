import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Navibar/Navibar.scss";
import { instance } from "../utils/axiosInstance";

export default function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { username, password };
    const user = await instance.post("api/v1/users/login/", userData);
    console.log(user);
  };

  const handleClose = () => props.handleClose();

  return (
    <Modal show onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Log in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="fromBasicEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control
              value={username}
              type="text"
              placeholder="Enter username or emeail"
              onChange={(event) => setUsername(event.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="fromBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              type="password"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="fromBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <br />
          <Form.Group controlId="SubmitButton">
            <Button type="submit" className="btn-custom">
              Log In
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
