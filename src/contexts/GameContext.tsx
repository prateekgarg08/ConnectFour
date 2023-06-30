import { createContext, useContext, useEffect, useState } from "react";

import { gc, GameContextType, Player } from "../types/game";
import isGamerOver from "../helper/isGameOver";
const GameContext = createContext({} as GameContextType);
// interface

export const GameProvider = ({ children }: { children: JSX.Element }) => {
  // const GameGrid: gc[] = [];
  const [GameGrid, setGameGrid] = useState<gc[]>([]);

  const [playerOne, setPlayerOne] = useState<Player>({
    score: 0,
    color: "red",
  });
  const [playerTwo, setPlayerTwo] = useState<Player>({
    score: 0,
    color: "yellow",
  });

  const [timer, setTimer] = useState<number>(30);

  const [winArray, setWinArray] = useState<number[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(2);
  const [isGameInProgress, setIsGameInProgress] = useState<boolean>(true);
  const [winner, setWinner] = useState<1 | 2 | "tie" | "none">("none");
  const switchCurrentPlayer = () => {
    console.log("hi");
    setCurrentPlayer((prev) => {
      console.log("rere");
      if (prev === 1) return 2;
      else return 1;
    });
  };

  const [isPause, setIsPause] = useState<boolean>(false);

  const [pos, setPos] = useState<number>(-1000);
  const dropCounter = (index: number) => {
    // console.log(currentPlayer);
    if (isPause == true) {
      return;
    }
    setIsPause(true);
    let n: number = 5;
    console.log("where");
    setGameGrid((obj: gc[]) => {
      const newArr: gc[] = [...obj];
      let flag: boolean = false;
      do {
        const pos: number = n * 7 + index;
        if (newArr[pos] != "empty") {
          n--;
        } else {
          flag = true;
        }
      } while (flag == false && n >= 0);
      if (n >= 0) {
        const pos: number = n * 7 + index;
        if (currentPlayer === 1) {
          newArr[pos] = "red";
        } else {
          newArr[pos] = "yellow";
        }
        setPos(pos);
      }
      return newArr;
    });

    // switchCurrentPlayer();
    setIsPause(false);
  };
  useEffect(() => {
    console.log("here");
    if (isPause == false) {
      const id = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);

      return () => clearInterval(id);
    }
  }, [isPause]);

  useEffect(() => {
    if (timer <= 0) {
      switchCurrentPlayer();
      setTimer(30);
    }
  }, [timer]);
  useEffect(() => {
    console.log(pos, GameGrid);

    const r = isGamerOver(GameGrid, pos);
    if (r.isOver && GameGrid.length > 0) {
      console.log("hola", r);
      setIsPause(true);
      setIsGameInProgress(false);
      if (r.isWin) {
        setTimeout(() => {
          setWinArray(r.winArr);
        }, 250);
        setWinner(currentPlayer);
        if (currentPlayer == 1) playerOne.score++;
        if (currentPlayer == 2) playerTwo.score++;
      } else {
        setWinner("tie");
      }
    } else {
      setIsPause(false);
      // setIsGameInProgress(true);
      setWinner("none");

      switchCurrentPlayer();
      setTimer(30);
    }
  }, [GameGrid]);

  // })
  // console.log(currentPlayer);
  // console.log(dropCounter);
  // console.log(setGameGrid);
  // for (let i = 0; i < 49; i++) {
  //   GameGrid.push("empty");
  // }
  // useEffect(()=>{})
  useEffect(() => {
    if (isGameInProgress) {
      setGameGrid(() => {
        const newArr: gc[] = [];
        for (let i = 0; i < 42; i++) {
          newArr.push("empty");
        }
        return newArr;
      });
      setWinArray([]);
    }
  }, [isGameInProgress]);

  useEffect(() => console.log(GameGrid), [GameGrid]);

  // console.log(currentPlayer);
  return (
    <GameContext.Provider
      value={{
        GameGrid,
        setGameGrid,
        dropCounter,
        currentPlayer,
        winArray,
        timer,
        isGameInProgress,
        setIsGameInProgress,
        winner,
        playerOne,
        playerTwo,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
export const useGameContext = () => {
  return useContext(GameContext);
};
