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

const Game = () => {
  const { search } = useLocation();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    socket = io(ENDPOINT);

    const { name, game, avatar } = queryString.parse(search);

    setName(name);

    socket.emit("join", { name, gameId: game, avatar }, ({ error }) =>
      setError(error)
    );

    return () => {
      socket.close();
    };
  }, [search]);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  return !error ? (
    socket ? (
      <Wrapper>
        <Header socket={socket} setDimensions={setDimensions} />
        <Container>
          <Players socket={socket} name={name} />
          <Editor socket={socket} name={name} dimensions={dimensions} />
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

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
`;

export default Game;
