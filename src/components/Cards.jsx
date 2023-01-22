import React from "react";
import { Button, Card } from "react-bootstrap";
import sharingan from "../sharingan.png";

export const Cards = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={sharingan} />
    <Card.Body>
      <Card.Title>Sharingan card</Card.Title>
      <Card.Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        veritatis expedita illum molestias omnis.
      </Card.Text>
      <Button variant="dark">Learn more</Button>
    </Card.Body>
  </Card>
);
