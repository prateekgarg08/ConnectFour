import Menu from "./components/Menu";
import Rules from "./components/Rules";
import { useState } from "react";
import { idText } from "typescript";
import { AnimatePresence } from "framer-motion";
import PlayerVPlayer from "./components/PlayerVPlayer";
import { GameProvider } from "./contexts/GameContext";
function App() {
  const [state, setState] = useState<number>(1);

  return (
    <div className="App relative z-0 min-h-screen  h-full flex flex-col  justify-center items-center bg-purple">
      {/* <AnimatePresence mode="wait">
        {state == 1 && <Menu key={1} setState={setState} />}
        {state == 2 && <Rules key={2} setState={setState} />}
      </AnimatePresence> */}
      <GameProvider>
        <PlayerVPlayer />
      </GameProvider>
    </div>
  );
}

export default App;
