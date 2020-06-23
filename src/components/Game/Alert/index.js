import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UIfx from "uifx";
import styled from "styled-components";

import Words from "./Words";
import Winner from "./Winner";

import swishMP3 from "../../../assets/audio/swish.wav";
import swoopMP3 from "../../../assets/audio/swoop.mp3";
const swish = new UIfx(swishMP3, { volume: 0.5 });
const swoop = new UIfx(swoopMP3, { volume: 0.5 });

const Alert = ({ socket }) => {
  const [alert, setAlert] = useState(null);
  const [words, setWords] = useState(null);
  const [winner, setWinner] = useState(null);

  const render = alert || words || winner;

  useEffect(() => {
    swish.play();
    return () => {
      swoop.play();
    };
  }, [render]);

  useEffect(() => {
    socket.on("alert", (alert) => {
      setAlert(alert);
      reset("alert");
    });

    socket.on("words", (words) => {
      setWords(words);
      reset("words");
    });

    socket.on("word", (word) => {
      reset("word");
    });

    socket.on("winner", (winner) => {
      setWinner(winner);
      reset("winner");
    });
  }, [socket]);

  const pickWord = (word) => {
    socket.emit("pick word", word);
  };

  const reset = (name) => {
    switch (name) {
      case "alert":
        setWords(null);
        setWinner(null);
        break;
      case "words":
        setAlert(null);
        setWinner(null);
        break;
      case "word":
        setAlert(null);
        setWords(null);
        setWinner(null);
        break;
      case "winner":
        setAlert(null);
        setWords(null);
        break;
      default:
        break;
    }
  };

  return (
    <AnimatePresence>
      {render ? (
        <Wrapper
          initial={{ transform: "translateY(-1000px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          exit={{ transform: "translateY(-1000px)", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Container>
            {alert ? <Text>{alert}</Text> : null}
            <Words words={words} pickWord={pickWord} />
            <Winner winner={winner} />
          </Container>
        </Wrapper>
      ) : null}
    </AnimatePresence>
  );
};

const Wrapper = styled(motion.div)`
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4a5568;
`;

const Container = styled.div`
  padding: 20px;
`;

const Text = styled.h1`
  text-align: center;
  font-size: 32px;
  color: #ffffff;
`;

export default Alert;
