import React, { useEffect } from "react";

import Button from "../Button";
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
    <Button action={generate} margin="0 0 20px 0" padding="10px 10px 5px 10px">
      <Icon icon={cycle} size="20px" />
    </Button>
  );
};

export default Randomizer;
