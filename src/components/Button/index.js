import React from "react";
import { motion } from "framer-motion";
import UIfx from "uifx";
import styled from "styled-components";

import pop from "../../assets/audio/pop.flac";

const bell = new UIfx(pop, { volume: 0.2 });

const Button = ({ action, margin, padding, children }) => {
  const handleAction = () => {
    bell.play();
    if (action) {
      action();
    }
  };

  return (
    <Container
      margin={margin}
      padding={padding}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onClick={handleAction}
    >
      {children}
    </Container>
  );
};

const Container = styled(motion.button)`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
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

export default Button;
