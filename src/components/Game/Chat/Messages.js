import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import styled from "styled-components";

const Messages = ({ messages, name }) => (
  <ScrollToBottom>
    {messages.map((message, i) => (
      <Message key={i} message={message} ownMessage={message.player === name} />
    ))}
  </ScrollToBottom>
);

const Message = ({ message, ownMessage }) => (
  <Container ownMessage={ownMessage}>
    {message.player}: {message.text}
  </Container>
);

const Container = styled.div`
  color: ${(props) => (props.ownMessage ? "red" : "blue")};
`;

export default Messages;
