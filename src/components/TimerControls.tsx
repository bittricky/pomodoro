import { FC } from "react";

import { TimerControlsProps, TimerMode } from "../types/global";

const TimerControls: FC<TimerControlsProps> = ({
  currentMode,
  onModeChange,
  color,
}) => {
  return (
    <div className="flex gap-3 bg-dark-800 p-2 rounded-full">
      {(["pomodoro", "shortBreak", "longBreak"] as TimerMode[]).map((mode) => (
        <button
          key={mode}
          onClick={() => onModeChange(mode)}
          className={`px-6 py-4 rounded-full text-sm font-bold transition-all ${
            currentMode === mode
              ? `${color} bg-current bg-opacity-100 shadow-lg`
              : "text-gray-400 hover:text-white"
          }`}
        >
          <span className={currentMode === mode ? "text-dark-900" : "current"}>
            {mode === "pomodoro"
              ? "pomodoro"
              : mode === "shortBreak"
              ? "short break"
              : "long break"}
          </span>
        </button>
      ))}
    </div>
  );
};

TimerControls.displayName = "TimerControls";

export default TimerControls;
