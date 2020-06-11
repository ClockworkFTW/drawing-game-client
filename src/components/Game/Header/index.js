import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Header = ({ socket }) => {
  const [word, setWord] = useState("");
  const [timer, setTimer] = useState("");

  useEffect(() => {
    socket.on("word", (word) => {
      setWord(word);
    });
  }, []);

  useEffect(() => {
    socket.on("timer", (time) => {
      time === 0 ? setTimer("") : setTimer(time);
    });
  }, []);

  return (
    <Container>
      {word ? <h1>{word}</h1> : null}
      {timer ? <h1>{timer}</h1> : null}
    </Container>
  );
};

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background: white;
`;

export default Header;
