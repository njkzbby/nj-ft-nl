import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Jumbotron from "./Jumbotron";
import Slider from "./Slider";
import { Cards } from "../Cards/Cards";

export const Home = () => (
  <>
    <Slider />
    <br />
    <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Row>
        <Col>
          <Cards />
        </Col>
        <Col>
          <Cards />
        </Col>
        <Col>
          <Cards />
        </Col>
      </Row>
    </Container>
    <Jumbotron />
  </>
);
