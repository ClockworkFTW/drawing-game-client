import React from "react";
import Avatar from "avataaars";
import { motion } from "framer-motion";
import styled from "styled-components";

import { options } from "./options";

const Display = ({ avatar, animate, size }) => {
  let config;

  if (avatar) {
    let arr = avatar.match(/.{2}/g);

    arr = arr.map((n) => {
      if (n[0] === 0) {
        return Number(n[1]);
      } else {
        return Number(n);
      }
    });

    config = options.map((option, i) => option[arr[i]]);
  }

  return avatar ? (
    <Container size={size} animate={animate ? loop : still}>
      <Avatar
        style={{ width: "100%", height: "100%" }}
        avatarStyle="Transparent"
        topType={config[0]}
        accessoriesType={config[1]}
        hatColor={config[2]}
        hairColor={config[3]}
        facialHairType={config[4]}
        facialHairColor={config[5]}
        clotheType={config[6]}
        clotheColor={config[7]}
        graphicType={config[8]}
        eyeType={config[9]}
        eyebrowType={config[10]}
        mouthType={config[11]}
        skinColor={config[12]}
      />
    </Container>
  ) : null;
};

const Container = styled(motion.div)`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const loop = {
  scale: [1, 1.1, 1],
  rotate: [-5, 5],
  translateX: [-10, 0, 10],
  translateY: [10, 0, 10],
  transition: { yoyo: Infinity, duration: 2 },
};

const still = { scale: 1 };

export default Display;
