import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import sharingan from "../sharingan.png";

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={sharingan} alt="sss" />
        <Carousel.Caption>
          <h3>Web Developr Sharingan</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={sharingan} alt="sss" />
        <Carousel.Caption>
          <h3>Web Developr Sharingan</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={sharingan} alt="sss" />
        <Carousel.Caption>
          <h3>Web Developr Sharingan</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
