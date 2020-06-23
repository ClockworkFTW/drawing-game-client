import React from "react";
import styled from "styled-components";

import { AvatarDisplay } from "../../Avatar";

const Winner = ({ winner }) =>
  winner ? (
    <Container>
      <AvatarDisplay avatar={winner.avatar} animate={true} size="200px" />
      <Text>{winner.name} has won the game!</Text>
    </Container>
  ) : null;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.h1`
  position: relative;
  z-index: 1;
  padding: 20px 30px;
  font-size: 28px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 4px #c1c1c1 solid;
  border-radius: 10px;
  background: #ffffff;
`;

export default Winner;
