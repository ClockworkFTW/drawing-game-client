import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Players = ({ socket, name }) => {
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
          <Player key={i}>
            <Score>{player.score}</Score>
            <Name
              me={player.name === name}
              drawing={player.drawing}
              locked={player.locked}
            >
              {player.name}
            </Name>
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
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 4px #c1c1c1 solid;
  background: white;
`;

const Player = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  &:nth-child(even) {
    background: #edf2f7;
  }
`;

const Score = styled.h1``;

const Name = styled.h1`
  color: ${(props) => {
    if (props.drawing) {
      return "#D53F8C";
    } else if (props.locked) {
      return "#38A169";
    } else if (props.me) {
      return "#3182CE";
    } else {
      return "#000000";
    }
  }};
`;

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
