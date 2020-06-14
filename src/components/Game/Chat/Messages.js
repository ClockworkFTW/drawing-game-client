import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import styled from "styled-components";

const Messages = ({ messages, name }) => (
  <ScrollToBottom>
    {messages.map((message, i) => {
      const me = message.player === name;
      const admin = message.player === "admin";
      return <Message key={i} message={message} me={me} admin={admin} />;
    })}
  </ScrollToBottom>
);

const Message = ({ message, me, admin }) => (
  <Container me={me} admin={admin}>
    {admin ? null : `${message.player}:`} {message.text}
  </Container>
);

const Container = styled.div`
  padding: 10px 20px;
  color: ${(props) => {
    if (props.me) {
      return "blue";
    } else if (props.admin) {
      return "black";
    } else {
      return "red";
    }
  }};
  &:nth-child(even) {
    background: #edf2f7;
  }
`;

export default Messages;
