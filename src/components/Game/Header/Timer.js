import React, { useEffect } from "react";
import { motion } from "framer-motion";
import UIfx from "uifx";
import styled from "styled-components";

import alarm from "../../../assets/icons/alarm.svg";
import tick1 from "../../../assets/audio/tick2.mp3";
const tick = new UIfx(tick1, { volume: 0.2 });

const Header = ({ timer }) => {
  const animate = {
    scale: timer === 80 ? [1, 1] : [1, 1.1],
    rotate: timer === 80 ? [0, 0] : [5, -5],
    transition: { yoyo: Infinity, duration: 0.5 },
  };

  useEffect(() => {
    if (timer !== 80) {
      tick.play();
    }
  }, [timer]);

  return (
    <Container icon={alarm} animate={animate}>
      {timer}
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 60px;
  height: 60px;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  background-image: ${(props) => `url(${props.icon})`};
  background-size: cover;
`;

export default Header;
