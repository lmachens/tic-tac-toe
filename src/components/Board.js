import "./board.css";
import React from "react";
import Square from "./Square";

export default function Board() {
  const status = "Next player: X";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
