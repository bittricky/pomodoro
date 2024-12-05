import { FC, useState } from "react";

import { TimerControls, CircularProgress, Settings } from "./components";

import { useTimer } from "./hooks/useTimer";

import { TimerMode } from "./types/global";
import { getColorClass } from "./utils/colors";

const App: FC = () => {
  const [currentMode, setCurrentMode] = useState<TimerMode>("pomodoro");

  const { timeLeft, isActive, progress, formatTime, toggleTimer, resetTimer } =
    useTimer(25);
  const handleModeChange = (mode: TimerMode) => {
    setCurrentMode(mode);
    resetTimer();
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
          <CircularProgress progress={progress} color={colorClass}>
            <div className="text-center">
              <div className="text-white text-[100px] leading-[120px] font-bold tracking-[-4px] mb-4">
                {formatTime(timeLeft)}
              </div>
              <button
                onClick={toggleTimer}
                className="text-white text-base uppercase tracking-[15px] hover:opacity-80 transition-opacity"
              >
                {isActive ? "Pause" : "Start"}
              </button>
            </div>
          </CircularProgress>
        </div>
      </div>

      <Settings settings={{}} onSettingsChange={() => {}} />
    </div>
  );
};

export default App;
