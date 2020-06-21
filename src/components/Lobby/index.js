import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AvatarDisplay, AvatarRandomizer } from "../Avatar";

const Lobby = () => {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [avatar, setAvatar] = useState(null);

  const link = `/game?name=${name}&avatar=${avatar}&game=${game}`;

  return (
    <Wrapper>
      <Container>
        <AvatarRandomizer setAvatar={setAvatar} />
        {avatar ? <AvatarDisplay avatar={avatar} size="200px" /> : null}
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Room"
          value={game}
          onChange={(e) => setGame(e.target.value)}
        />
        <Link to={link}>
          <Button>Join Game</Button>
        </Link>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 4px #c1c1c1 solid;
  border-radius: 10px;
  background: #ffffff;
  outline: none;
  font-family: inherit;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-family: inherit;
  font-size: 16px;
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

export default Lobby;
