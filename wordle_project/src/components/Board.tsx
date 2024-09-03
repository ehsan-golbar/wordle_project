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
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

// let boardGame: BoardCell[] = [
//   { letter: "", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
//   { letter: "?", colorState: "def" },
// ];
function Board() {
  const boardGame = useSelector((state: RootState) => state.boardGame);
  return (
    <>
      <div className="col-span-2 ml-6">
        <Card className="mt-6 w-96">
          <CardBody>
            <div className="grid grid-cols-5 gap-2 ">
              {boardGame.map((letter) =>
                letter.map((item) => {
                  return (
                    <div>
                      <BoardLetter val={item}></BoardLetter>
                    </div>
                  );
                })
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Board;
