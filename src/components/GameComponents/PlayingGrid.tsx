import React, { useEffect, useState } from "react";
import largeBlack from "../../assets/images/board-layer-black-large.svg";
import largeWhite from "../../assets/images/board-layer-white-large.svg";
import smallBlack from "../../assets/images/board-layer-black-small.svg";
import smallWhite from "../../assets/images/board-layer-white-small.svg";
import redPointer from "../../assets/images/marker-red.svg";
import yellowPointer from "../../assets/images/marker-yellow.svg";
import yellowCounter from "../../assets/images/counter-yellow-large.svg";
import smallYellowCounter from "../../assets/images/counter-yellow-small.svg";
import redCounter from "../../assets/images/counter-red-large.svg";
import smallRedCounter from "../../assets/images/counter-red-small.svg";
import turnBackgroundRed from "../../assets/images/turn-background-red.svg";
import turnBackgroundYellow from "../../assets/images/turn-background-yellow.svg";
import { useGameContext } from "../../contexts/GameContext";
import { gc } from "../../types/game";
import { motion } from "framer-motion";
function GridColumn({ index }: { index: number }) {
  const [show, setShow] = useState<boolean>(false);
  const { GameGrid, setGameGrid, dropCounter, currentPlayer } = useGameContext();

  const handleClick = () => {
    console.log("iaa");
    if (GameGrid[index] === "empty") {
      dropCounter(index);
    }
  };
  const handleMouseEnter = () => {
    setShow(true);
  };
  const handleMouseLeave = () => setShow(false);

  return (
    <button
      className="relative cursor-pointer"
      // onMouseOver={handleMouseOver}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {show && currentPlayer === 2 && (
        <img src={yellowPointer} className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-110%]" alt="" />
      )}
      {show && currentPlayer === 1 && (
        <img src={redPointer} className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-110%]" alt="" />
      )}
    </button>
  );
}

function GridCell({ index }: { index: number }) {
  const { GameGrid, winArray } = useGameContext();

  let inner = GameGrid[index];
  console.log(winArray.includes(index));
  return (
    <div className="relative">
      {/* <img src={index % 2 == 0 ? redCounter : yellowCounter} alt="" /> */}
      {inner == "red" && (
        <>
          <motion.img
            initial={{ y: -(87 * Math.floor(index / 7) + 87 / 2) }}
            animate={{
              y: 0,
              transition: {
                type: "keyframes",
                stiffness: 20,
              },
            }}
            className="hidden md:block"
            src={redCounter}
          />
          <motion.img
            initial={{ y: -(46.5 * Math.floor(index / 7) + 46.5 / 2) }}
            animate={{
              y: 0,
              transition: {
                type: "keyframes",
                stiffness: 20,
              },
            }}
            className=" md:hidden"
            src={smallRedCounter}
          />
        </>
      )}
      {inner == "yellow" && (
        <>
          <motion.img
            initial={{ y: -(87 * Math.floor(index / 7) + 87 / 2) }}
            animate={{
              y: 0,
              transition: {
                type: "keyframes",
                stiffness: 20,
              },
            }}
            className="hidden md:block"
            src={yellowCounter}
          />
          <motion.img
            initial={{ y: -(46.5 * Math.floor(index / 7) + 46.5 / 2) }}
            animate={{
              y: 0,
              transition: {
                type: "keyframes",
                stiffness: 20,
              },
            }}
            className=" md:hidden"
            src={smallYellowCounter}
          />
        </>
      )}
      {winArray.length > 0 && winArray.includes(index) && (
        <div className="w-5 h-5 md:w-8 md:h-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-[50%] border-[6px]  border-white"></div>
      )}
    </div>
  );
}
const TurnAndResult = () => {
  const { currentPlayer, timer } = useGameContext();
  return (
    <div className=" absolute font-SpaceG  bottom-0 translate-x-[-50%] translate-y-[90%] left-[50%] z-10">
      {currentPlayer == 1 && <img src={turnBackgroundRed} alt="" />}
      {currentPlayer == 1 && (
        <div className=" absolute z-10 inset-0 justify-center items-center flex flex-col">
          <span className="uppercase text-md font-bold text-white">Player 1's turn</span>
          <span className=" text-5xl font-bold text-white">{timer}s</span>
        </div>
      )}
      {currentPlayer == 2 && <img src={turnBackgroundYellow} alt="" />}

      {currentPlayer == 2 && (
        <div className=" absolute z-10 inset-0 py-10 justify-between items-center flex flex-col">
          <span className="uppercase text-md font-bold text-black">Player 2's turn</span>
          <span className=" text-5xl font-bold text-black">{timer}s</span>
        </div>
      )}
    </div>
  );
};

const WinnerDisplay = () => {
  const { winner, setIsGameInProgress } = useGameContext();
  console.log(winner);
  return (
    <div className="absolute   bottom-0 translate-x-[-50%] translate-y-[85%] left-[50%] z-10">
      <div className="border-black border-[3px] rounded-xl shadow-darkBlack gap-1 bg-white px-20 py-2 flex flex-col items-center font-SpaceG  ">
        <span className="font-bold text-lg uppercase">
          {winner === 1 && " Player 1"}
          {winner === 2 && " Player 2"}
        </span>
        <span className="uppercase text-5xl font-bold text-black">
          {(winner === 1 || winner === 2) && " wins"}

          {winner === "tie" && "Tie"}
          {/* {winner} */}
        </span>
        <button
          onClick={() => setIsGameInProgress(true)}
          className="text-lg font-bold px-4 py-2 bg-dark-purple rounded-3xl text-white uppercase"
        >
          {"Play Again"}
        </button>
      </div>
    </div>
  );
};

export default function PlayingGrid({ className }: { className: string }) {
  const GridArray: JSX.Element[] = [];
  const { GameGrid, isGameInProgress } = useGameContext();
  // console.log(isGameInProgress);
  for (let i = 0; i < 42; i++) {
    GridArray.push(<GridCell key={i} index={i} />);
  }

  return (
    <div className={`${className} flex flex-col items-center`}>
      <div className={`relative max-w-fit`}>
        <img width={632} height={594} src={largeWhite} alt="" className="relative hidden md:block" />
        <img width={632} height={594} src={largeBlack} className="absolute inset-0 -z-20 hidden md:block" alt="" />
        <img src={smallWhite} alt="" className="relative md:hidden " />
        <img src={smallBlack} className="absolute inset-0 -z-20 md:hidden " alt="" />
        <div className=" absolute inset-0 z-10 md:px-[17px] grid grid-cols-7 md:gap-[18px] px-[8px] gap-[5.5px] ">
          {[0, 1, 2, 3, 4, 5, 6].map((item) => {
            return <GridColumn key={item} index={item} />;
          })}
        </div>
        <div className=" absolute inset-0 -z-10  md:px-[17px] px-[8px] gap-[5.5px] pt-[8px]  md:pt-[17px] grid grid-cols-7 grid-rows-[repeat(6,41px)] md:grid-rows-[repeat(6,70px)]  md:gap-[18px]">
          {GridArray}
        </div>
        {isGameInProgress ? <TurnAndResult /> : <WinnerDisplay />}
      </div>
    </div>
  );
}
