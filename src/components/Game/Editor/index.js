import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Palette from "./Palette";
import Brush from "./Brush";
import Canvas from "./Canvas";

const Editor = ({ socket }) => {
  const [options, setOptions] = useState({
    stroke: "#000000",
    strokeWidth: 10,
    lineCap: "round",
    lineJoin: "round",
    globalCompositeOperation: "source-over",
  });

  const [lines, setLines] = useState([]);

  useEffect(() => {
    socket.on("draw", (lines) => {
      setLines(lines);
    });
  }, []);

  const clear = () => {
    setLines([]);
    socket.emit("draw", []);
  };

  return (
    <Container>
      <Canvas
        socket={socket}
        lines={lines}
        setLines={setLines}
        options={options}
      />
      <Palette options={options} setOptions={setOptions} />
      <Brush options={options} setOptions={setOptions} />
      <button onClick={clear}>clear</button>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px;
  flex: 1;
`;

export default Editor;
