import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Palette from "./Palette";
import Brush from "./Brush";
import Canvas from "./Canvas";

const Editor = ({ socket, name, dimensions }) => {
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
        dimensions={dimensions}
      />
      <Group>
        <Palette options={options} setOptions={setOptions} />
        <Brush options={options} setOptions={setOptions} clear={clear} />
      </Group>
    </Container>
  );
};

const Container = styled.div`
  float: left;
  margin: 10px;
`;

const Group = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Editor;
