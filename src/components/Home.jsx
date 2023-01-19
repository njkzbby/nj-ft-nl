import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import sharingan from "../sharingan.png";
import Slider from "./Slider";

export const Home = () => (
  <>
    <Slider></Slider>
    <br />
    <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={sharingan} />
            <Card.Body>
              <Card.Title>Sharingan card</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis veritatis expedita illum molestias omnis.
              </Card.Text>
              <Button variant="dark">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={sharingan} />
            <Card.Body>
              <Card.Title>Sharingan card</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis veritatis expedita illum molestias omnis.
              </Card.Text>
              <Button variant="dark">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={sharingan} />
            <Card.Body>
              <Card.Title>Sharingan card</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis veritatis expedita illum molestias omnis.
              </Card.Text>
              <Button variant="dark">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);
