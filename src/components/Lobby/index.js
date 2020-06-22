import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "./Logo";
import { AvatarDisplay, AvatarRandomizer } from "../Avatar";
import Button from "../Button";

const Lobby = () => {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [avatar, setAvatar] = useState(null);

  const link = `/game?name=${name}&avatar=${avatar}&game=${game}`;

  return (
    <Wrapper>
      <Container>
        <Logo />
        <AvatarRandomizer setAvatar={setAvatar} />
        <AvatarDisplay avatar={avatar} animate={true} size="200px" />
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Game"
          value={game}
          onChange={(e) => setGame(e.target.value)}
        />
        <Link to={link}>
          <Button margin="20px 0 0 0 " padding="10px 20px">
            Join Game
          </Button>
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
  z-index: 1;
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

export default Lobby;
