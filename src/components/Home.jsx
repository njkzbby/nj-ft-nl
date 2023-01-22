import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Jumbotron from "./Jumbotron";
import Slider from "./Slider";
import { Cards } from "./Cards";

export const Home = () => (
  <>
    <Slider></Slider>
    <br />
    <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Row>
        <Col>
          <Cards></Cards>
        </Col>
        <Col>
          <Cards></Cards>
        </Col>
        <Col>
          <Cards></Cards>
        </Col>
      </Row>
    </Container>
    <Jumbotron></Jumbotron>
  </>
);
