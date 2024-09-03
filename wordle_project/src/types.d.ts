type Colors = "green" | "yellow" | "gray" | "def";

type GameResult = "win" | "lose" | "process";

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
  resultOfGame: GameResult;
}

type BoardCell = {
  letter: string;
  colorState: Colors;
};

interface SelectedWord {
  selectedword: string;
}
