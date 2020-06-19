import React from "react";
import styled from "styled-components";

import Icon from "../../Icon";
import paint from "../../../assets/icons/paint.svg";
import checkmark from "../../../assets/icons/checkmark.svg";

const Status = ({ player }) => {
  const { drawing, locked } = player;

  return drawing || locked ? (
    <Container>
      <Icon icon={drawing ? paint : checkmark} size="34px" />
    </Container>
  ) : null;
};

const Container = styled.div`
  margin-right: 10px;
  opacity: 0.7;
`;

export default Status;
