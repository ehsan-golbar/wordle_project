import { Chip } from "@material-tailwind/react";
import React from "react";

interface MyComponentProps {
  val: BoardCell;
}

function BoardLetter(props: MyComponentProps) {
  return (
    <>
      <Chip
        value={props.val.letter}
        variant="ghost"
        className=" justify-center h-12"
      ></Chip>
    </>
  );
}

export default BoardLetter;
