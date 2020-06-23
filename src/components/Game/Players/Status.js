import React, { useEffect } from "react";
import UIfx from "uifx";
import styled from "styled-components";

import Icon from "../../Icon";
import paint from "../../../assets/icons/paint.svg";
import checkmark from "../../../assets/icons/checkmark.svg";

import successMP3 from "../../../assets/audio/success.mp3";
const success = new UIfx(successMP3, { volume: 0.2 });

const Status = ({ player }) => {
  const { drawing, locked } = player;

  useEffect(() => {
    if (locked) {
      success.play();
    }
  }, [locked]);

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
