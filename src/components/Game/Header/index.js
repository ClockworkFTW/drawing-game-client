import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Header = ({ socket }) => {
  const [timer, setTimer] = useState("");
  const [word, setWord] = useState("");

  useEffect(() => {
    socket.on("timer", (time) => {
      time === 0 ? setTimer("") : setTimer(time);
    });
  }, []);

  useEffect(() => {
    socket.on("word", (word) => {
      setWord(word);
    });
  }, []);

  return (
    <Container>
      {timer ? <Timer>{timer}</Timer> : null}
      {word ? <Word>{word}</Word> : null}
    </Container>
  );
};

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background: white;
`;

const Word = styled.h1`
  font-size: 20px;
  letter-spacing: 3px;
`;

const Timer = styled.h1`
  font-size: 20px;
`;

export default Header;
