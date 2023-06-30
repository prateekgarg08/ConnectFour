import { gc } from "../types/game";

interface result {
  isOver: boolean;
  isWin: boolean;
  winArr: number[];
}
const isGamerOver = (GameGrid: gc[], pos: number): result => {
  let r = isHorizontalWin(GameGrid, pos);
  if (r.isWin) {
    return r;
  }
  r = isVerticalWin(GameGrid, pos);
  if (r.isWin) {
    return r;
  }
  r = isDiagonalWin(GameGrid, pos);
  if (r.isWin) {
    return r;
  }
  let flag = true;
  for (let i = 0; i < 42; i++) {
    if (GameGrid[i] === "empty") {
      flag = false;
      break;
    }
  }

  // if (isHorizontalWin(GameGrid, pos)) return true;
  // if (isVerticalWin(GameGrid, pos)) return true;
  // if (isDiagonalWin(GameGrid, pos)) return true;
  // return false;
  // return false;
  return {
    isOver: flag,
    isWin: false,
    winArr: [],
  };
};

const isHorizontalWin = (GameGrid: gc[], pos: number): result => {
  const el: gc = GameGrid[pos];
  let row: number = Number(Math.floor(pos / 7));
  let col: number = pos % 7;
  let totalMatch = 0;
  let winArr = [];
  for (let i: number = col - 3; i < col + 4; i++) {
    if (i >= 0 && i < 7) {
      let temp: gc = GameGrid[row * 7 + i];
      // console.log(totalMatch,temp,row*7)
      if (temp === el && el !== "empty") {
        totalMatch++;
        winArr.push(row * 7 + i);
      } else {
        totalMatch = 0;
        winArr = [];
      }
      if (totalMatch == 4) {
        return {
          isOver: true,
          isWin: true,
          winArr,
        };
      }
    }
  }
  return {
    isOver: false,
    isWin: false,
    winArr: [],
  };
};

const isVerticalWin = (GameGrid: gc[], pos: number): result => {
  const el: gc = GameGrid[pos];
  let row: number = Number(Math.floor(pos / 7));
  let col: number = pos % 7;
  let totalMatch = 0;
  let winArr = [];
  for (let i: number = row - 3; i < row + 4; i++) {
    if (i >= 0 && i < 6) {
      let temp: gc = GameGrid[i * 7 + col];
      if (temp === el && el !== "empty") {
        totalMatch++;
        winArr.push(i * 7 + col);
      } else {
        totalMatch = 0;
        winArr = [];
      }
      if (totalMatch == 4) {
        return {
          isOver: true,

          isWin: true,
          winArr,
        };
      }
    }
  }
  return {
    isOver: false,

    isWin: false,
    winArr: [],
  };
};

const isDiagonalWin = (GameGrid: gc[], pos: number): result => {
  const el: gc = GameGrid[pos];
  let row: number = Number(Math.floor(pos / 7));
  let col: number = pos % 7;
  let totalMatch = 0;
  let winArr = [];
  for (let k: number = -3; k < 4; k++) {
    let i = row + k;
    let j = col + k;
    if (i >= 0 && i < 6 && j >= 0 && j < 7) {
      let temp: gc = GameGrid[i * 7 + j];
      if (temp === el && el !== "empty") {
        totalMatch++;
        winArr.push(i * 7 + j);
      } else {
        totalMatch = 0;
        winArr = [];
      }
      if (totalMatch == 4) {
        return {
          isOver: true,

          isWin: true,
          winArr,
        };
      }
    }
  }
  for (let k: number = -3; k < 4; k++) {
    let i = row + k;
    let j = col - k;
    let winArr = [];
    if (i >= 0 && i < 6 && j >= 0 && j < 7) {
      let temp: gc = GameGrid[i * 7 + j];
      if (temp === el && el !== "empty") {
        totalMatch++;
        winArr.push(i * 7 + j);
      } else {
        totalMatch = 0;
        winArr = [];
      }
      if (totalMatch == 4) {
        return {
          isOver: true,

          isWin: true,
          winArr,
        };
      }
    }
  }
  return {
    isOver: false,
    isWin: false,
    winArr: [],
  };
};

// console.log(isGamerOver(GameGrid, 37));

export default isGamerOver;
