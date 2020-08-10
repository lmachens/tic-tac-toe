import "./game.css";
import React from "react";
import Board from "./Board";

export default function Game() {
  return (
    <div className="game">
      <Board />
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
