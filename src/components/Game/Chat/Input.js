import React from "react";
import styled from "styled-components";

const Form = ({ message, setMessage, sendMessage }) => (
  <Container>
    <Input
      type="text"
      placeholder="Type your guess here..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <Button type="submit" onClick={(e) => sendMessage(e)}>
      send
    </Button>
  </Container>
);

const Container = styled.form`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: 10px;
`;
const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-family: inherit;
`;
const Button = styled.button`
  font-family: inherit;
`;

export default Form;
