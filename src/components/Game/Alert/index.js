import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <AnimatePresence>
      {alert || words.length > 0 ? (
        <Wrapper
          initial={{ transform: "translateY(-1000px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          exit={{ transform: "translateY(-1000px)", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Container>
            {alert ? <Text>{alert}</Text> : null}
            {words
              ? words.map((word, i) => (
                  <Button
                    key={i}
                    onClick={() => pickWord(word)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    {word}
                  </Button>
                ))
              : null}
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

const Button = styled(motion.button)`
  margin: 20px;
  padding: 10px 20px;
  font-family: inherit;
  font-size: 22px;
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 4px #c1c1c1 solid;
  border-radius: 10px;
  background: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

export default Alert;
