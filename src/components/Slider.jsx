import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import sharingans from "../sharingans.jpg";
import renngans from "../renngans.jpg";
import ultraeyes from "../ultraeyes.jpg";

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={sharingans} alt="sss" />
        <Carousel.Caption>
          <h3>Web Developr sharingans</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={renngans} alt="sss" />
        <Carousel.Caption>
          <h3>Web Developr renngans</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={ultraeyes} alt="sss" />
        <Carousel.Caption>
          <h3>Web Developr ultraeyes</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
