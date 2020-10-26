import React, { useEffect } from "react";
import "./app.css";
import Game from "./components/Game";

function App() {
  useEffect(() => {
    window.addEventListener("mousedown", function () {
      document.body.classList.add("mouse-navigation");
      document.body.classList.remove("kbd-navigation");
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        document.body.classList.add("kbd-navigation");
        document.body.classList.remove("mouse-navigation");
      }
    });
    window.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && e.target.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  }, []);

  return (
    <div className="app">
      <Game />
    </div>
  );
}

export default App;
