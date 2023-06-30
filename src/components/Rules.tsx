import React from "react";
import tick from "../assets/images/icon-check.svg";
import { motion } from "framer-motion";
export default function Rules({ setState }: { setState: any }) {
  return (
    <motion.div
      initial={{ x: "1000", opacity: 0 }}
      // layout={"position"}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.125 } }}
      exit={{ x: "-100vw", opacity: 0, transition: { duration: 0.125 } }}
      className="w-full relative py-8 font-SpaceG  flex flex-col items-center  justify-center max-w-lg px-5 bg-white rounded-[2.5rem] shadow-darkBlack border-[3px] border-black z-20 md:h-auto "
    >
      <h1 className="uppercase font-bold text-6xl">Rules</h1>
      <div className="my-10 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl  text-purple font-[700] uppercase">objective</h2>
          <p className=" opacity-[0.66] font-[500]">
            Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or
            diagonally).
          </p>
        </div>
        <div>
          <h2 className="text-xl  text-purple font-[700] uppercase">how to play</h2>
          <ul className="flex flex-col gap-3 mt-5">
            <p className="flex gap-3">
              <b className="">1 </b>
              <span className=" opacity-[0.66] font-[500] ">Red goes first in the game.</span>
            </p>
            <p className="flex gap-3">
              <b className="">2 </b>
              <span className=" opacity-[0.66] font-[500] ">
                Players must alternate turns, and only one disc can be dropped in each turn.
              </span>
            </p>
            <p className="flex gap-3">
              <b className="">3 </b>
              <span className=" opacity-[0.66] font-[500] ">
                The game ends when there is a 4-in-a-row or a stalemate.
              </span>
            </p>
            <p className="flex gap-3">
              <b className="">4 </b>
              <span className=" opacity-[0.66] font-[500] ">
                The starter of the previous game goes second on the next game.
              </span>
            </p>
          </ul>
        </div>
      </div>
      <button onClick={() => setState(1)} className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%]">
        <img src={tick} alt="" />
      </button>
    </motion.div>
  );
}
