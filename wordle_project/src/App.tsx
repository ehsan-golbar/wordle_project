import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Header from "./components/Header";
// import './App.css'

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Board></Board>

        <Keyboard></Keyboard>
      </div>
    </>
  );
}

export default App;
