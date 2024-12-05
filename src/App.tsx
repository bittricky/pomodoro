import { FC, useState } from "react";

import { TimerControls } from "./components";

import { getColorClass } from "./utils/colors";
import { TimerMode } from "./types/global";

const App: FC = () => {
  const [currentMode, setCurrentMode] = useState<TimerMode>("pomodoro");

  const handleModeChange = (mode: TimerMode) => {
    setCurrentMode(mode);
    // TODO: handle timer duration
  };

  const colorClass = getColorClass("coral");
  const fontClass = `font-coral`;

  return (
    <div
      className={`min-h-screen bg-dark-900 flex flex-col items-center pt-12 ${fontClass}`}
    >
      <h1 className="text-white text-3xl mb-12">pomodoro</h1>

      <TimerControls
        currentMode={currentMode}
        onModeChange={handleModeChange}
        color={colorClass}
      />

      <div className="mt-12 mb-16">
        <div className="bg-dark-800 rounded-full p-5 shadow-timer">
          {/* TODO: add pomodoro timer here */}
        </div>
      </div>

      {/* TODO: add settings here */}
    </div>
  );
};

export default App;
