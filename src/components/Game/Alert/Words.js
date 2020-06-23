import React from "react";
import styled from "styled-components";

import Button from "../../Button";

const Words = ({ words, pickWord }) =>
  words ? (
    <Container>
      <Text>Pick a word to draw</Text>
      {words.map((word, i) => (
        <Button
          key={i}
          action={() => pickWord(word)}
          margin="20px"
          padding="10px 20px"
        >
          {word}
        </Button>
      ))}
    </Container>
  ) : null;

const Container = styled.div`
  text-align: center;
`;

const Text = styled.h1`
  font-size: 32px;
  color: #ffffff;
`;

export default Words;
