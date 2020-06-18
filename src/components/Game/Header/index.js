import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Header = ({ socket }) => {
  const [timer, setTimer] = useState("");
  const [word, setWord] = useState("");
  const [round, setRound] = useState("");

  useEffect(() => {
    socket.on("timer", (time) => {
      time === 0 ? setTimer("") : setTimer(time);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("round", (round) => {
      setRound(round);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("word", (word) => {
      setWord(word);
    });
  }, [socket]);

  return (
    <Container>
      <Timer>Time: {timer}</Timer>
      <Word>{word}</Word>
      <Round>Round {round} of 3</Round>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 4px #c1c1c1 solid;
  background: white;
`;

const Word = styled.h1`
  font-size: 30px;
  letter-spacing: 3px;
`;

const Timer = styled.h1`
  font-size: 20px;
`;

const Round = styled.h1`
  font-size: 20px;
`;

export default Header;
