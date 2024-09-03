type Colors = "green" | "yellow" | "gray" | "def";

interface BoardCell {
  letter: string;
  colorState: Colors;
}

interface BoardCells {
  board: BoardCell[];
}

interface Cursor {
  row: number;
  col: number;
}
