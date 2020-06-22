import React from "react";
import styled from "styled-components";

const Logo = () => (
  <Container>
    <span style={{ color: "#ee140c", textShadow: "3px 3px #750b07" }}>S</span>
    <span style={{ color: "#ff7003", textShadow: "3px 3px #c33701" }}>k</span>
    <span style={{ color: "#ffe402", textShadow: "3px 3px #e8a204" }}>r</span>
    <span style={{ color: "#00cc00", textShadow: "3px 3px #005610" }}>i</span>
    <span style={{ color: "#05b2ff", textShadow: "3px 3px #01569e" }}>b</span>
    <span style={{ color: "#231fd3", textShadow: "3px 3px #0e0765" }}>b</span>
    <span style={{ color: "#a300bb", textShadow: "3px 3px #550069" }}>l</span>
    <span style={{ color: "#d37baa", textShadow: "3px 3px #a85474" }}>.</span>
    <span style={{ color: "#ffffff", textShadow: "3px 3px #c1c1c1" }}>i</span>
    <span style={{ color: "#ffffff", textShadow: "3px 3px #c1c1c1" }}>o</span>
  </Container>
);

const Container = styled.div`
  width: 100%;
  margin: 20px 0px;
  text-align: center;
  font-size: 70px;
  font-weight: 700;
  color: #ffffff;
`;

export default Logo;
