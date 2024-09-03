type Colors = "green" | "yellow" | "gray" | "def";

// interface BoardCell {
//   letter: string;
//   colorState: Colors;
// }

// interface BoardCells {
//   board: BoardCell[];
// }

interface Attempt {
  row: number;
  col: number;
}

type BoardCell = {
  letter: string;
  colorState: Colors;
};

interface SelectedWord {
  selectedword: string;
}
