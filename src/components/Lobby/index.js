import React, { useState } from "react";
import { Link } from "react-router-dom";

const Lobby = () => {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your room"
        value={game}
        onChange={(e) => setGame(e.target.value)}
      />
      <Link to={`/game?name=${name ? name : "random name"}&game=${game}`}>
        Join Game
      </Link>
    </div>
  );
};

export default Lobby;
