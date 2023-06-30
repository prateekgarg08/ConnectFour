import React from "react";
import logo from "../assets/images/logo.svg";
import pvc from "../assets/images/player-vs-cpu.svg";
import pvp from "../assets/images/player-vs-player.svg";
import { motion, AnimatePresence } from "framer-motion";
export default function Menu({ setState }: { setState: any }) {
  return (
    // <AnimatePresence>
    <motion.div
      initial={{ x: "1000", opacity: 0 }}
      // layout={"position"}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.125 } }}
      exit={{ x: "-100vw", opacity: 0, transition: { duration: 0.125 } }}
      className="w-full h-screen font-SpaceG font-bold flex flex-col items-center justify-center max-w-lg px-3 bg-purple md:rounded-3xl md:shadow-darkBlack md:border-[3px] md:border-black md:px-10  md:h-auto relative  "
    >
      <div className="w-full flex flex-col items-center ">
        <img src={logo} alt="connect four logo " className="md:my-10" />
        <div className="flex flex-col w-full gap-6 my-16 md:mt-12 md:mb-16">
          <button className="bg-red rounded-2xl  w-full flex justify-between items-center px-4 h-16 border-[3px]  shadow-darkBlack hover:shadow-darkPurple border-black transition-all ease-in">
            <span className="uppercase text-white text-2xl ">Player vs CPU</span>
            <img src={pvc} alt="player vs cpu" />
          </button>
          <button className="bg-yellow rounded-2xl  w-full flex justify-between items-center px-4 h-16 border-[3px]  shadow-darkBlack hover:shadow-darkPurple border-black transition-all ease-in">
            <span className="uppercase text-black text-2xl ">Player vs Player</span>
            <img src={pvp} alt="player vs player" />
          </button>
          <button
            onClick={() => setState(2)}
            className="bg-white rounded-2xl  w-full flex justify-between items-center px-4 h-16 border-[3px]  shadow-darkBlack hover:shadow-darkPurple border-black  transition-all ease-in"
          >
            <span className="uppercase text-black text-2xl ">Game rules</span>
            {/* <img src={pvc} alt="player vs cpu" /> */}
          </button>
        </div>
      </div>
    </motion.div>
    // </AnimatePresence>
  );
}
