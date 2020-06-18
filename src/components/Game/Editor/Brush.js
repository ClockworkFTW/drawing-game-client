import React from "react";
import styled from "styled-components";

import trash from "../../../assets/icons/trash.svg";
import brush from "../../../assets/icons/brush.svg";
import pencil from "../../../assets/icons/pencil.svg";

import small from "../../../assets/icons/small.svg";
import medium from "../../../assets/icons/medium.svg";
import large from "../../../assets/icons/large.svg";

const Brush = ({ options, setOptions, clear }) => (
  <div>
    <Button onClick={() => setOptions({ ...options, strokeWidth: 5 })}>
      <Icon src={small} />
    </Button>
    <Button onClick={() => setOptions({ ...options, strokeWidth: 10 })}>
      <Icon src={medium} />
    </Button>
    <Button onClick={() => setOptions({ ...options, strokeWidth: 15 })}>
      <Icon src={large} />
    </Button>
    <Button
      onClick={() =>
        setOptions({
          ...options,
          globalCompositeOperation:
            options.globalCompositeOperation === "source-over"
              ? "destination-out"
              : "source-over",
        })
      }
    >
      <Icon
        src={
          options.globalCompositeOperation === "source-over" ? brush : pencil
        }
      />
    </Button>
    <Button onClick={clear}>
      <Icon src={trash} />
    </Button>
  </div>
);

const Button = styled.button`
  margin-left: 5px;
  border-radius: 10px;
  border: none;
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 4px #c1c1c1 solid;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export default Brush;
