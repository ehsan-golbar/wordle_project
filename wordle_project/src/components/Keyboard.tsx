import { Button } from "@material-tailwind/react";
import React from "react";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setColorState, setLetter } from "../store/slices/BoardCellsSlice";
import { setAttempt } from "../store/slices/AttemptSlice";

function Keyboard() {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Delete", "Z", "X", "C", "V", "B", "N", "M", "Enter"];

  const dispatch: AppDispatch = useDispatch();
  const userAttempt = useSelector((state: RootState) => state.userAttempt);
  const boardGame = useSelector((state: RootState) => state.boardGame);

  const selectedWord = useSelector((state: RootState) => state.selectedWord);

  const handleClick = (key: string) => {
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
      if (currentCol === 5) {
        boardGame[currentRow].map((lett, index) => {
          if (selectedWord.charAt(index).toUpperCase() === lett.letter) {
            dispatch(
              setColorState({
                row: currentRow,
                col: index,
                colorState: "green",
              })
            );
          } else if (selectedWord.includes(lett.letter.toLowerCase())) {
            dispatch(
              setColorState({
                row: currentRow,
                col: index,
                colorState: "yellow",
              })
            );
          } else {
            dispatch(
              setColorState({ row: currentRow, col: index, colorState: "gray" })
            );
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

  return (
    <>
      <div className="col-span-3 grid grid-rows-3 gap-2 content-center items-center mr-6">
        <div className="grid grid-cols-10 gap-3 justify-around">
          {row1.map((key, id) => {
            return (
              <div key={id}>
                <Button color="white" onClick={() => handleClick(key)}>
                  {key}
                </Button>
              </div>
            );
          })}
        </div>

        <div className=" grid grid-cols-9 justify-around">
          {row2.map((key, id) => {
            return (
              <div key={id}>
                <Button color="white" onClick={() => handleClick(key)}>
                  {key}
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
                <Button color="white" onClick={() => handleClick(key)}>
                  {key}
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
