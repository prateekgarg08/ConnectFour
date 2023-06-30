// types.ts
export type gc = "red" | "yellow" | "empty";

export interface Player {
  score: number;
  color: "red" | "yellow";
}

export interface GameContextType {
  GameGrid: gc[];
  setGameGrid: any;
  dropCounter(index: number): any;
  currentPlayer: 1 | 2;
  winArray: number[];
  timer: number;
  isGameInProgress: boolean;
  winner: 1 | 2 | "tie" | "none";
  setIsGameInProgress: any;
  playerOne: Player;
  playerTwo: Player;
}

// Other types...
