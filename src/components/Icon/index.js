import React from "react";
import styled from "styled-components";

const Icon = ({ icon, size }) => <Image src={icon} size={size} />;

const Image = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

export default Icon;
