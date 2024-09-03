import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setColorState, setLetter } from "../store/slices/BoardCellsSlice";
import { setAttempt } from "../store/slices/AttemptSlice";

function Keyboard() {
  // Updated rows with colorState: "def" added to each element

  const [row1, setRow1] = useState<BoardCell[]>([
    { letter: "Q", colorState: "def" },
    { letter: "W", colorState: "def" },
    { letter: "E", colorState: "def" },
    { letter: "R", colorState: "def" },
    { letter: "T", colorState: "def" },
    { letter: "Y", colorState: "def" },
    { letter: "U", colorState: "def" },
    { letter: "I", colorState: "def" },
    { letter: "O", colorState: "def" },
    { letter: "P", colorState: "def" },
  ]);

  const [row2, setRow2] = useState<BoardCell[]>([
    { letter: "A", colorState: "def" },
    { letter: "S", colorState: "def" },
    { letter: "D", colorState: "def" },
    { letter: "F", colorState: "def" },
    { letter: "G", colorState: "def" },
    { letter: "H", colorState: "def" },
    { letter: "J", colorState: "def" },
    { letter: "K", colorState: "def" },
    { letter: "L", colorState: "def" },
  ]);

  const [row3, setRow3] = useState<BoardCell[]>([
    { letter: "Delete", colorState: "def" },
    { letter: "Z", colorState: "def" },
    { letter: "X", colorState: "def" },
    { letter: "C", colorState: "def" },
    { letter: "V", colorState: "def" },
    { letter: "B", colorState: "def" },
    { letter: "N", colorState: "def" },
    { letter: "M", colorState: "def" },
    { letter: "Enter", colorState: "def" },
  ]);

  const dispatch: AppDispatch = useDispatch();
  const userAttempt = useSelector((state: RootState) => state.userAttempt);
  const boardGame = useSelector((state: RootState) => state.boardGame);

  const selectedWord = useSelector((state: RootState) => state.selectedWord);

  const handleClick = (key: string, keyboardRow: number) => {
    const currentRow = userAttempt.row;
    const currentCol = userAttempt.col;

    if (key === "Delete") {
      if (currentCol > 0) {
        dispatch(
          setLetter({ row: currentRow, col: currentCol - 1, letter: "" })
        );
        dispatch(setAttempt({ row: currentRow, col: currentCol - 1 }));
      }
    } else if (key === "Enter") {
      let colorState: Colors | undefined = undefined;
      if (currentCol === 5) {
        // const colorState : Colors = null;
        boardGame[currentRow].map((lett, index) => {
          if (selectedWord.charAt(index).toUpperCase() === lett.letter) {
            dispatch(
              setColorState({
                row: currentRow,
                col: index,
                colorState: "green",
              })
            );

            setRow1((prevRow1) =>
              prevRow1.map((cell) =>
                cell.letter === key ? { ...cell, colorState: "green" } : cell
              )
            );
          } else if (selectedWord.includes(lett.letter.toLowerCase())) {
            dispatch(
              setColorState({
                row: currentRow,
                col: index,
                colorState: "yellow",
              })
            );
            colorState = "yellow";
          } else {
            dispatch(
              setColorState({ row: currentRow, col: index, colorState: "gray" })
            );

            colorState = "gray";
          }
        });

        // if (keyboardRow === 1) {
        //   row1.map((item) => {
        //     item.letter === key ? { ...item, colorState: colorState } : item;
        //   });
        //   console.log(row1);
        // } else if (keyboardRow === 2) {
        //   row2.map((item) => {
        //     item.letter === key ? { ...item, colorState: colorState } : item;
        //   });
        //   console.log(row2);
        // } else {
        //   row3.map((item) => {
        //     item.letter === key ? { ...item, colorState: colorState } : item;
        //   });
        //   console.log(row3);
        // }

        dispatch(setAttempt({ row: currentRow + 1, col: 0 }));
      }
    } else {
      if (currentRow < 6) {
        if (currentCol < 5) {
          dispatch(
            setLetter({ row: currentRow, col: currentCol, letter: key })
          );
          dispatch(setAttempt({ row: currentRow, col: currentCol + 1 }));
        }
      } else {
      }
      // dispatch(setLetter({ row: currentRow, col: currentCol, letter: key }));
    }
  };

  // useEffect(()=>{

  // }, [])
  // console.log(row1);
  return (
    <>
      <div className="col-span-3 grid grid-rows-3 gap-2 content-center items-center mr-6">
        <div className="grid grid-cols-10 gap-3 justify-around">
          {row1.map((key, id) => {
            return (
              <div key={id}>
                <Button
                  color={
                    key.colorState === "def"
                      ? "white"
                      : key.colorState === "green"
                      ? "green"
                      : key.colorState === "yellow"
                      ? "yellow"
                      : "red"
                  }
                  onClick={() => handleClick(key.letter, 1)}
                >
                  {key.letter}
                </Button>
              </div>
            );
          })}
        </div>

        <div className=" grid grid-cols-9 justify-around">
          {row2.map((key, id) => {
            return (
              <div key={id}>
                <Button
                  color="white"
                  onClick={() => handleClick(key.letter, 2)}
                >
                  {key.letter}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-9">
          {/* <div className="flex justify-center w-auto">
            <Button color="white">Delete</Button>
          </div> */}

          {row3.map((key, id) => {
            return (
              <div className="flex justify-center items-center w-auto" key={id}>
                <Button
                  color="white"
                  onClick={() => handleClick(key.letter, 3)}
                >
                  {key.letter}
                </Button>
              </div>
            );
          })}
          {/* 
          <div className="flex justify-center w-auto">
            <Button color="white">Enter</Button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Keyboard;
