import React from "react";
import styled from "styled-components";

import Button from "../../Button";
import Icon from "../../Icon";

import trash from "../../../assets/icons/trash.svg";
import brush from "../../../assets/icons/brush.svg";
import pencil from "../../../assets/icons/pencil.svg";
import small from "../../../assets/icons/small.svg";
import medium from "../../../assets/icons/medium.svg";
import large from "../../../assets/icons/large.svg";

const Brush = ({ options, setOptions, clear }) => {
  const erase = options.globalCompositeOperation === "source-over";
  return (
    <Container>
      <Button
        action={() => setOptions({ ...options, strokeWidth: 5 })}
        margin="0 0 0 10px"
      >
        <Icon icon={small} size="40px" />
      </Button>
      <Button
        action={() => setOptions({ ...options, strokeWidth: 10 })}
        margin="0 0 0 10px"
      >
        <Icon icon={medium} size="40px" />
      </Button>
      <Button
        action={() => setOptions({ ...options, strokeWidth: 15 })}
        margin="0 0 0 10px"
      >
        <Icon icon={large} size="40px" />
      </Button>
      <Button
        action={() =>
          setOptions({
            ...options,
            globalCompositeOperation: erase ? "destination-out" : "source-over",
          })
        }
        margin="0 0 0 10px"
      >
        <Icon icon={erase ? brush : pencil} size="40px" />
      </Button>
      <Button action={clear} margin="0 0 0 10px">
        <Icon icon={trash} size="40px" />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10px;
`;

export default Brush;
