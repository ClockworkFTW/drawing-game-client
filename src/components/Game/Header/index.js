import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Header = ({ socket }) => {
  const [words, setWords] = useState([]);
  const [alert, setAlert] = useState("");
  const [timer, setTimer] = useState("");

  useEffect(() => {
    socket.on("words", (words) => {
      setAlert("");
      setWords(words);
    });
  }, []);

  useEffect(() => {
    socket.on("alert", (alert) => {
      setWords("");
      setAlert(alert);
    });
  }, []);

  useEffect(() => {
    socket.on("timer", (time) => {
      time === 0 ? setTimer("") : setTimer(time);
    });
  }, []);

  const pickWord = (word) => socket.emit("pick word", word);

  return (
    <Container>
      {words
        ? words.map((word, i) => (
            <button key={i} onClick={() => pickWord(word)}>
              {word}
            </button>
          ))
        : null}
      {alert ? <h1>{alert}</h1> : null}
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
