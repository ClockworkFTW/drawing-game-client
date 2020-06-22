import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import Icon from "../Icon";
import cycle from "../../assets/icons/cycle.svg";

import { options } from "./options";

const Randomizer = ({ setAvatar }) => {
  const generate = () => {
    let config = options.map((option) => {
      const index = Math.floor(Math.random() * option.length).toString();
      if (index.length === 1) {
        return "0".concat(index);
      } else {
        return index;
      }
    });

    setAvatar(config.join(""));
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <Button
      onClick={generate}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      <Icon icon={cycle} size="20px" />
    </Button>
  );
};

const Button = styled(motion.button)`
  margin-bottom: 20px;
  padding: 10px 10px 5px 10px;
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

export default Randomizer;
