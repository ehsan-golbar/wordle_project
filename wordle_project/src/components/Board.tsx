import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import React from "react";
import BoardLetter from "./BoardLetter";

let boardGame: BoardCell[] = [
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
  { letter: "?", colorState: "def" },
];
function Board() {
  return (
    <>
      <Card className="mt-6 w-96">
        <CardBody>
          <div className="grid grid-cols-5 gap-2 ">
            {boardGame.map((letter, id) => {
              return (
                <div key={id}>
                  <BoardLetter val={letter}></BoardLetter>
                </div>
              );
            })}
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Board;
