import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import Timer from "./Timer";

const Header = ({ socket, setDimensions }) => {
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

  // Set canvas dimensions
  const containerRef = useRef(null);

  const handleResize = () => {
    const width = containerRef.current.offsetWidth - 700;
    setDimensions({ width, height: width * 0.75 });
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container ref={containerRef}>
      <Timer timer={timer} />
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
  padding: 10px 20px;
  border-radius: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 4px #c1c1c1 solid;
  background: white;
`;

const Word = styled.h1`
  font-size: 36px;
  letter-spacing: 3px;
`;

const Round = styled.h1`
  font-size: 20px;
`;

export default Header;
