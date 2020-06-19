import React from "react";
import Avatar from "avataaars";
import styled from "styled-components";

import { options } from "./options";

const Display = ({ avatar, size }) => {
  let arr = avatar.match(/.{2}/g);

  arr = arr.map((n) => {
    if (n[0] === 0) {
      return Number(n[1]);
    } else {
      return Number(n);
    }
  });

  const config = options.map((option, i) => option[arr[i]]);

  return (
    <Container size={size}>
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
  );
};

const Container = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

export default Display;
