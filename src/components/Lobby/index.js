import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

import Logo from "./Logo";
import { AvatarDisplay, AvatarRandomizer } from "../Avatar";

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
        {avatar ? (
          <Animate
            animate={{
              scale: [1, 1.1, 1],
              rotate: [-5, 5],
              translateX: [-10, 0, 10],
              translateY: [10, 0, 10],
              transition: { yoyo: Infinity, duration: 2 },
            }}
          >
            <AvatarDisplay avatar={avatar} size="200px" />
          </Animate>
        ) : null}
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
          <Button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
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

const Animate = styled(motion.div)``;

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

const Button = styled(motion.button)`
  margin-top: 20px;
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
