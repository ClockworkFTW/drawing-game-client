import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Lobby = () => {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");

  return (
    <Wrapper>
      <Container>
        <Avatar name={name} />
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
        <Link to={`/game?name=${name ? name : "random name"}&game=${game}`}>
          <Button>Join Room</Button>
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
  text-align: center;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px auto;
  border-radius: 10px;
  border: 2px solid #000000;
  background-image: ${(props) =>
    `url('https://api.adorable.io/avatars/200/${props.name}')`};
  background-size: cover;
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
    color: #ffffff;
    background: #000000;
  }
`;

export default Lobby;
