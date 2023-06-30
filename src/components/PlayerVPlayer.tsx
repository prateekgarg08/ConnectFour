import React from "react";
import { motion } from "framer-motion";
import PlayingGrid from "./GameComponents/PlayingGrid";
import logo from "../assets/images/logo.svg";
import playerOneImg from "../assets/images/player-one.svg";
import playerTwoImg from "../assets/images/player-two.svg";
import { useGameContext } from "../contexts/GameContext";

export default function PlayerVPlayer() {
  const { playerOne, playerTwo } = useGameContext();
  return (
    <motion.div
      initial={{ x: "1000", opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.125 } }}
      exit={{ x: "-100vw", opacity: 0, transition: { duration: 0.125 } }}
      className={`w-full flex flex-col `}
    >
      <div className="relative flex flex-col font-SpaceG items-center pt-5">
        <div>
          <div className="w-full flex justify-between md:justify-center  md:gap-20 items-center px-4 mb-12">
            <button className="uppercase text-white px-5  py-2 font-semibold rounded-3xl bg-dark-purple">Menu </button>
            <img src={logo} alt="" className="" />
            <button className="uppercase text-white px-5  py-2 font-semibold rounded-3xl bg-dark-purple">
              Restart{" "}
            </button>
          </div>
          <div className="relative grid grid-cols-2 lg:grid-cols-none items-center justify-center gap-x-5 lg:gap-x-10 gap-y-5 md:gap-y-12  sm:px-12 lg:gap-10">
            <div className="relative flex flex-col col-span-1 lg:col-start-1 row-start-1 bg-white max-w-lg border-black border-[3px] rounded-2xl shadow-darkBlack items-center lg:gap-2 px-5 py-3 lg:py-8">
              <h4 className="font-bold uppercase text-lg lg:text-2xl">Player 1</h4>
              <span className="font-bold text-2xl lg:text-5xl">{playerOne.score}</span>
              <img
                src={playerOneImg}
                className="absolute top-[50%] translate-y-[-50%] left-0 lg:top-0 lg:left-[50%] translate-x-[-50%] lg:translate-y-[-50%]"
                alt=""
              />
            </div>
            <div className="relative flex flex-col col-span-1 row-start-1 bg-white max-w-lg border-black border-[3px] rounded-2xl shadow-darkBlack items-center lg:gap-2 px-5 py-3 lg:py-8">
              <h4 className="font-bold uppercase text-lg lg:text-2xl">Player 2</h4>
              <span className="font-bold text-2xl lg:text-5xl">{playerTwo.score}</span>
              <img
                src={playerTwoImg}
                className="absolute top-[50%] translate-y-[-50%] right-0  translate-x-[50%] lg:top-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]"
                alt=""
              />
            </div>
            <PlayingGrid className="col-span-2 lg:col-start-2 lg:row-start-1 translate-y-5 lg:translate-y-10" />
            {/* <div></div> */}
            {/* <TurnAndResult /> */}
          </div>
        </div>
      </div>
      <div className=" h-60 md:h-48 -z-40   w-full rounded-t-[5rem] bg-dark-purple "></div>
    </motion.div>
  );
}
