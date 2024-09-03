import { Card, CardBody } from "@material-tailwind/react";
import BoardLetter from "./BoardLetter";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

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
