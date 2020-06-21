import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Messages from "./Messages";
import Input from "./Input";

const Chat = ({ socket, name, height }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat", (message) => {
      setMessages((msgs) => [...msgs, message]);
    });
  }, [socket]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("chat", message);
      setMessage("");
    }
  };

  return (
    <Container height={height}>
      <Messages messages={messages} name={name} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </Container>
  );
};

const Container = styled.ul`
  position: relative;
  float: left;
  width: 400px;
  height: ${(props) => `${props.height}px`};
  margin: 10px;
  border-radius: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 4px #c1c1c1 solid;
  background: #ffffff;
  overflow: hidden;
`;

export default Chat;
