import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Alert = ({ socket }) => {
  const [alert, setAlert] = useState("");
  const [words, setWords] = useState([]);

  useEffect(() => {
    socket.on("alert", (alert) => {
      setWords([]);
      setAlert(alert);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("words", (words) => {
      setWords(words);
      setAlert("");
    });
  }, [socket]);

  useEffect(() => {
    socket.on("word", (word) => {
      setWords([]);
      setAlert("");
    });
  }, [socket]);

  const pickWord = (word) => {
    socket.emit("pick word", word);
  };

  return alert || words.length > 0 ? (
    <Wrapper>
      <Container>
        {alert ? <Text>{alert}</Text> : null}
        {words
          ? words.map((word, i) => (
              <Button key={i} onClick={() => pickWord(word)}>
                {word}
              </Button>
            ))
          : null}
      </Container>
    </Wrapper>
  ) : null;
};

const Wrapper = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div``;

const Text = styled.h1`
  font-size: 32px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-family: inherit;
  font-size: 22px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #45aaf2;
  &:hover {
    cursor: pointer;
    color: #ffffff;
    background: #000000;
  }
`;

export default Alert;
