import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Header from "./components/Header";
import { Button } from "@material-tailwind/react";
import store from "./store/store";
import { Provider } from "react-redux";
// import './App.css'

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="flex flex-col items-center w-full gap-10 bg-gray-900 h-screen overflow-y-auto ">
          <div className="sticky top-0 left-1 z-10  w-full">
            <Header></Header>
          </div>

          <div className="grid grid-cols-5 items-center mx-5">
            <Board></Board>
            <Keyboard></Keyboard>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
