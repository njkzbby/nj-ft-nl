import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import jumboimg from "../jumboimg.jpg";

const Styles = styled.div`
    .jumbo {
   background: url(${jumboimg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height 300px;
    position: relative;
    z-index: -2;
}
    .overlay {
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;

const Jumbotron = () => (
  <Styles>
    <Container fluid className="jumbotron jumbo">
      <div className="overlay"></div>
      <Container>
        <br />
        <h1>Sharingan developer?</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          quia nisi ullam rerum placeat provident, aliquid, fuga magnam in
          corporis iusto omnis consectetur exercitationem aliquam error iure
          perspiciatis officia accusantium.
        </p>
      </Container>
    </Container>
  </Styles>
);

export default Jumbotron;
