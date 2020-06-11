import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Palette from "./Palette";
import Brush from "./Brush";
import Canvas from "./Canvas";

const Editor = ({ socket, name }) => {
  const [options, setOptions] = useState({
    stroke: "#000000",
    strokeWidth: 10,
    lineCap: "round",
    lineJoin: "round",
    globalCompositeOperation: "source-over",
  });
  const [lines, setLines] = useState([]);
  const [blocked, setBlocked] = useState(true);

  useEffect(() => {
    socket.on("draw", (lines) => {
      setLines(lines);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("players", (players) => {
      players.forEach((player) => {
        if (player.name === name && player.drawing) {
          setBlocked(false);
        }
      });
    });
  }, [socket, name]);

  const clear = () => {
    if (!blocked) {
      setLines([]);
      socket.emit("draw", []);
    }
  };

  return (
    <Container>
      <Canvas
        socket={socket}
        lines={lines}
        setLines={setLines}
        options={options}
        blocked={blocked}
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
