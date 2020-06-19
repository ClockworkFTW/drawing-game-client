import React, { useState, useEffect } from "react";
import Avatar from "avataaars";
import styled from "styled-components";

import Status from "./Status";
import Info from "./Info";
import { AvatarDisplay } from "../../Avatar";

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
            <Group>
              <Status player={player} />
              <Info player={player} name={name} />
            </Group>
            <AvatarDisplay avatar={player.avatar} size="80px" />
          </Player>
        ))}
    </Container>
  );
};

const Container = styled.ul`
  margin: 10px;
  flex: 0 0 260px;
  border-radius: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 4px #c1c1c1 solid;
  background: white;
  overflow: hidden;
`;

const Player = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0 20px;
  &:nth-child(odd) {
    background: #edf2f7;
  }
`;

const Group = styled.div`
  display: flex;
`;

export default Players;
