import React, { useState, useRef } from "react";
import { Stage, Layer, Line } from "react-konva";
import styled from "styled-components";

const Canvas = ({ socket, lines, setLines, options }) => {
  const stageRef = useRef(null);

  const [drawing, setDrawing] = useState(false);

  const handleMouseDown = () => {
    setDrawing(true);
    setLines([...lines, { ...options, points: [] }]);
  };

  const handleMouseMove = (e) => {
    if (!drawing) {
      return;
    }

    const stage = stageRef.current.getStage();
    const point = stage.getPointerPosition();

    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());

    socket.emit("draw", lines);
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  return (
    <Container options={options}>
      <Stage
        width={500}
        height={500}
        onContentMousedown={handleMouseDown}
        onContentMousemove={handleMouseMove}
        onContentMouseup={handleMouseUp}
        ref={stageRef}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line key={i} {...line} />
          ))}
        </Layer>
      </Stage>
    </Container>
  );
};

const Container = styled.div`
  cursor: ${(props) => {
    const dim = props.options.strokeWidth;
    const rad = props.options.strokeWidth / 2;
    const color = `%23${props.options.stroke.slice(1)}`;
    const url = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${dim}' height='${dim}'><circle cx='${rad}' cy='${rad}' r='${rad}' fill='${color}' /></svg>") ${rad} ${rad}, auto`;
    return url;
  }};
  border-radius: 10px;
  background: white;
`;

export default Canvas;
