import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";
import styled from "styled-components";

import Header from "./Header";
import Players from "./Players";
import Editor from "./Editor";
import Chat from "./Chat";

const ENDPOINT = "http://localhost:3005/";
let socket;

const Game = ({}) => {
  const { search } = useLocation();
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    socket = io(ENDPOINT);

    const { name, game } = queryString.parse(search);
    setName(name);
    setGame(game);

    socket.emit("join", { name, game }, ({ error }) => setError(error));

    return () => {
      socket.close();
    };
  }, [ENDPOINT]);

  return !error ? (
    socket ? (
      <Wrapper>
        <Header socket={socket} />
        <Container>
          <Players socket={socket} />
          <Editor socket={socket} />
          <Chat socket={socket} name={name} />
        </Container>
      </Wrapper>
    ) : null
  ) : (
    <div>
      <h1>{error}</h1>
      <Link to="/">return to lobby</Link>
    </div>
  );
};

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
`;

export default Game;
