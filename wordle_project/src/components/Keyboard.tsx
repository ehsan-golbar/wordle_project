import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setColorState, setLetter } from "../store/slices/BoardCellsSlice";
import { setAttempt } from "../store/slices/AttemptSlice";
import { updateKeyboardColor } from "../store/slices/KeyboardSlice";

function Keyboard() {
  // Updated rows with colorState: "def" added to each element

  const row1 = useSelector((state: RootState) => state.keyboard.row1);
  const row2 = useSelector((state: RootState) => state.keyboard.row2);
  const row3 = useSelector((state: RootState) => state.keyboard.row3);
  // const dispatch = useDispatch();

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
      // let colorState: Colors | undefined = undefined;
      if (currentCol === 5) {
        // const colorState : Colors = null;
        boardGame[currentRow].map((lett, index) => {
          if (
            selectedWord.charAt(index).toUpperCase() ===
            lett.letter.toUpperCase()
          ) {
            console.log("in this ");
            console.log("board ", keyboardRow);
            dispatch(
              setColorState({
                row: currentRow,
                col: index,
                colorState: "green",
              })
            );
            console.log("in this2 ");
            console.log("board 2 ", keyboardRow);
            dispatch(
              updateKeyboardColor({
                // rowIndex: keyboardRow,
                letter: lett.letter,
                newColorState: "green",
              })
            );
            // keyboardRow === 1 && updateRow1(lett.letter, "green");
            // keyboardRow === 2 && updateRow2(lett.letter, "green");
            // keyboardRow === 3 && updateRow3(lett.letter, "green");
            // colorState = "green";
            // console.log
          } else if (selectedWord.includes(lett.letter.toLowerCase())) {
            dispatch(
              setColorState({
                row: currentRow,
                col: index,
                colorState: "yellow",
              })
            );

            dispatch(
              updateKeyboardColor({
                // rowIndex: keyboardRow,
                letter: lett.letter,
                newColorState: "yellow",
              })
            );
            // colorState = "yellow";

            // keyboardRow === 1 && updateRow1(lett.letter, "yellow");
            // keyboardRow === 2 && updateRow2(lett.letter, "yellow");
            // keyboardRow === 3 && updateRow3(lett.letter, "yellow");
          } else {
            dispatch(
              setColorState({ row: currentRow, col: index, colorState: "gray" })
            );

            dispatch(
              updateKeyboardColor({
                // rowIndex: keyboardRow,
                letter: lett.letter,
                newColorState: "gray",
              })
            );

            // keyboardRow === 1 && updateRow1(lett.letter, "gray");
            // keyboardRow === 2 && updateRow2(lett.letter, "gray");
            // keyboardRow === 3 && updateRow3(lett.letter, "gray");
            // colorState = "gray";
          }
        });

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

  // const updateRow1 = (key: string, color: Colors) => {
  //   setRow1((prevRow1) =>
  //     prevRow1.map((cell) => {
  //       if (cell.letter.toUpperCase() === key) {
  //         console.log("here");
  //         return { ...cell, colorState: color };
  //       } else {
  //         return cell;
  //       }
  //     })
  //   );
  // };

  // const updateRow2 = (key: string, color: Colors) => {
  //   setRow2((prevRow2) =>
  //     prevRow2.map((cell) => {
  //       if (cell.letter.toUpperCase() === key) {
  //         console.log("here");
  //         return { ...cell, colorState: color };
  //       } else {
  //         return cell;
  //       }
  //     })
  //   );
  // };

  // const updateRow3 = (key: string, color: Colors) => {
  //   setRow3((prevRow3) =>
  //     prevRow3.map((cell) => {
  //       if (cell.letter.toUpperCase() === key) {
  //         console.log("here");
  //         return { ...cell, colorState: color };
  //       } else {
  //         return cell;
  //       }
  //     })
  //   );
  // };

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
                  color={
                    key.colorState === "def"
                      ? "white"
                      : key.colorState === "green"
                      ? "green"
                      : key.colorState === "yellow"
                      ? "yellow"
                      : "red"
                  }
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
                  color={
                    key.colorState === "def"
                      ? "white"
                      : key.colorState === "green"
                      ? "green"
                      : key.colorState === "yellow"
                      ? "yellow"
                      : "red"
                  }
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
