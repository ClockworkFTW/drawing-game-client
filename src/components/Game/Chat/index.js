import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Messages from "./Messages";
import Input from "./Input";

const Chat = ({ socket, name }) => {
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
    <Container>
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
  overflow: scroll;
  margin: 10px;
  flex: 0 0 400px;
  border-radius: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 4px #c1c1c1 solid;
  background: white;
`;

export default Chat;
