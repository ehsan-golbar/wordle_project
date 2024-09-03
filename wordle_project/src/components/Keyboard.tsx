import { Button } from "@material-tailwind/react";
import React from "react";

function Keyboard() {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <>
      <div className="col-span-3 grid grid-rows-3 gap-2 content-center items-center mr-6">
        <div className="grid grid-cols-10 gap-3 justify-around">
          {row1.map((key, id) => {
            return (
              <div key={id}>
                <Button color="white">{key}</Button>
              </div>
            );
          })}
        </div>

        <div className=" grid grid-cols-9 justify-around">
          {row2.map((key, id) => {
            return (
              <div key={id}>
                <Button color="white">{key}</Button>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-9">
          <div className="flex justify-center w-auto">
            <Button color="white">Delete</Button>
          </div>

          {row3.map((key, id) => {
            return (
              <div className="flex justify-center items-center w-auto" key={id}>
                <Button color="white">{key}</Button>
              </div>
            );
          })}

          <div className="flex justify-center w-auto">
            <Button color="white">Enter</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Keyboard;
