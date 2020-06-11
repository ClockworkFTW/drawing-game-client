import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Players = ({ socket }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.on("players", (players) => {
      setPlayers(players);
    });
  }, [socket]);

  return (
    <Container>
      {players
        .sort((a, b) => b.score - a.score)
        .map((player, i) => (
          <Player key={i} drawing={player.drawing} locked={player.locked}>
            <Score>{player.score}</Score>
            <Name>{player.name}</Name>
            <Avatar name={player.name} />
          </Player>
        ))}
    </Container>
  );
};

const Container = styled.ul`
  margin: 10px;
  flex: 0 0 200px;
  border-radius: 10px;
  background: white;
`;

const Player = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: ${(props) =>
    props.drawing ? "red" : props.locked ? "green" : "none"};
`;

const Score = styled.h1``;

const Name = styled.h1``;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #000000;
  background-image: ${(props) =>
    `url('https://api.adorable.io/avatars/100/${props.name}')`};
  background-size: cover;
`;

export default Players;
