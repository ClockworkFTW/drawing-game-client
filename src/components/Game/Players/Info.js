import React from "react";
import styled from "styled-components";

const Info = ({ player, name }) => (
  <Container>
    <Score scored={player.locked} animate={{ scale: [1, 2, 1] }}>
      {player.score}
    </Score>
    <Name me={player.name === name}>{player.name}</Name>
  </Container>
);

const Container = styled.div``;

const Score = styled.h1`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => (props.scored ? "#20bf6b" : "#1A202C")};
`;

const Name = styled.h1`
  font-size: 14px;
  color: ${(props) => (props.me ? "#4b7bec" : "#718096")};
`;

export default Info;
