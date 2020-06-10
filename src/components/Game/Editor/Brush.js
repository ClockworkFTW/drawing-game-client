import React from "react";

const Brush = ({ options, setOptions }) => (
  <div>
    <button onClick={() => setOptions({ ...options, strokeWidth: 5 })}>
      small
    </button>
    <button onClick={() => setOptions({ ...options, strokeWidth: 10 })}>
      medium
    </button>
    <button onClick={() => setOptions({ ...options, strokeWidth: 15 })}>
      large
    </button>
    <button
      onClick={() =>
        setOptions({
          ...options,
          globalCompositeOperation:
            options.globalCompositeOperation === "source-over"
              ? "destination-out"
              : "source-over",
        })
      }
    >
      {options.globalCompositeOperation === "source-over" ? "brush" : "eraser"}
    </button>
  </div>
);

export default Brush;
