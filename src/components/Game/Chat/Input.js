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

const Container = styled.form``;
const Input = styled.input``;
const Button = styled.button``;

export default Form;
