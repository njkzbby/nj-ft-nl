import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Navibar/Navibar.scss";
import { instance } from "../utils/axiosInstance";

export default function SigninPage(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      username,
      email,
      password,
      password_again: passwordAgain,
    };
    const user = await instance.post("api/v1/users/register/", userData);
    console.log(user.data);
  };

  const handleClose = () => props.handleClose();

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="fromBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              type="text"
              placeholder="Enter username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="fromBasicEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control
              value={email}
              type="email"
              placeholder="Enter emeail"
              onChange={(event) => setEmail(event.target.value)}
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
          <Form.Group controlId="fromBasicPassword">
            <Form.Control
              value={passwordAgain}
              type="password"
              placeholder="Repeat password"
              onChange={(event) => setPasswordAgain(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="fromBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <br />
          <Form.Group controlId="SubmitButton">
            <Button type="submit" className="btn-custom">
              Sign In
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
