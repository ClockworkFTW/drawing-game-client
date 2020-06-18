import React from "react";
import styled from "styled-components";

const lightColors = [
  "#ffffff",
  "#c1c1c1",
  "#ef130c",
  "#ff7102",
  "#ffe403",
  "#00cc00",
  "#00b3ff",
  "#231fd3",
  "#a300bb",
  "#d37caa",
  "#a0522e",
];

const darkColors = [
  "#000000",
  "#4c4c4c",
  "#750b07",
  "#c33800",
  "#e8a204",
  "#005511",
  "#01569e",
  "#0e0765",
  "#550069",
  "#a85574",
  "#63310d",
];

const style = {
  width: "30px",
  height: "30px",
  outline: "none",
};

const Palette = ({ options, setOptions }) => (
  <Container>
    <Row>
      {lightColors.map((color, i) => (
        <button
          key={i}
          style={{
            ...style,
            background: color,
            border:
              options.stroke === color
                ? "2px solid black"
                : `2px solid ${color}`,
          }}
          onClick={() => setOptions({ ...options, stroke: color })}
        ></button>
      ))}
    </Row>
    <Row>
      {darkColors.map((color, i) => (
        <button
          key={i}
          style={{
            ...style,
            background: color,
            border:
              options.stroke === color
                ? "2px solid black"
                : `2px solid ${color}`,
          }}
          onClick={() => setOptions({ ...options, stroke: color })}
        ></button>
      ))}
    </Row>
  </Container>
);

const Container = styled.div`
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
`;

const Row = styled.div``;

export default Palette;
