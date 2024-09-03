import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Header from "./components/Header";
import { Button } from "@material-tailwind/react";
// import './App.css'

function App() {
  return (
    <>
      <div className="flex flex-col items-center w-full gap-10 bg-gray-900 h-screen overflow-y-auto">
        <Header></Header>
        <Board></Board>
        <Keyboard></Keyboard>
      </div>
    </>
  );
}

export default App;
