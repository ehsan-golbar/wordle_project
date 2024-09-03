import { Button } from "@material-tailwind/react";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setColorState, setLetter } from "../store/slices/BoardCellsSlice";
import { setAttempt, setResult } from "../store/slices/AttemptSlice";
import { updateKeyboardColor } from "../store/slices/KeyboardSlice";
import WinCard from "./WinCard";
import LoseCard from "./LoseCard";

function Keyboard() {
  const row1 = useSelector((state: RootState) => state.keyboard.row1);
  const row2 = useSelector((state: RootState) => state.keyboard.row2);
  const row3 = useSelector((state: RootState) => state.keyboard.row3);

  const dispatch: AppDispatch = useDispatch();
  const userAttempt = useSelector((state: RootState) => state.userAttempt);
  const boardGame = useSelector((state: RootState) => state.boardGame);

  const selectedWord = useSelector((state: RootState) => state.selectedWord);
  console.log("selectedWord ", selectedWord);
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
      let allGreen = true;

      if (currentCol === 5) {
        boardGame[currentRow].map((lett, index) => {
          if (
            selectedWord.charAt(index).toUpperCase() ===
            lett.letter.toUpperCase()
          ) {
            dispatch(
              setColorState({
                row: currentRow,
                col: index,
                colorState: "green",
              })
            );

            dispatch(
              updateKeyboardColor({
                letter: lett.letter,
                newColorState: "green",
              })
            );
          } else if (selectedWord.includes(lett.letter.toLowerCase())) {
            allGreen = false;
            dispatch(
              setColorState({
                row: currentRow,
                col: index,
                colorState: "yellow",
              })
            );

            dispatch(
              updateKeyboardColor({
                letter: lett.letter,
                newColorState: "yellow",
              })
            );
          } else {
            allGreen = false;
            dispatch(
              setColorState({
                row: currentRow,
                col: index,
                colorState: "gray",
              })
            );

            dispatch(
              updateKeyboardColor({
                letter: lett.letter,
                newColorState: "gray",
              })
            );
          }
        });

        dispatch(setAttempt({ row: currentRow + 1, col: 0 }));

        if (allGreen) {
          dispatch(setResult({ res: "win" }));
        } else if (currentRow === 5) {
          dispatch(setResult({ res: "lose" }));
        }
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
    }
  };

  return (
    <>
      {userAttempt.resultOfGame === "process" ? (
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
                    disabled={key.colorState === "gray"}
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
                    disabled={key.colorState === "gray"}
                  >
                    {key.letter}
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-9">
            {row3.map((key, id) => {
              return (
                <div
                  className="flex justify-center items-center w-auto"
                  key={id}
                >
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
                    disabled={key.colorState === "gray"}
                  >
                    {key.letter}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      ) : userAttempt.resultOfGame === "win" ? (
        <WinCard></WinCard>
      ) : (
        <LoseCard></LoseCard>
      )}
    </>
  );
}

export default Keyboard;
