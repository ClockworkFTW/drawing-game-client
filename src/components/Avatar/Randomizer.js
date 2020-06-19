import React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import cupid from "../../assets/icons/cupid.svg";

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

  return (
    <Button onClick={generate}>
      <Icon icon={cupid} size="30px" />
    </Button>
  );
};

const Button = styled.button`
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
