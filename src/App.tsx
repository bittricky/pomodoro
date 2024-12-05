import { FC } from "react";

import { getColorClass } from "./utils/colors";

const App: FC = () => {
  const colorClass = getColorClass("coral");
  const fontClass = `font-coral`;

  return (
    <div
      className={`min-h-screen bg-dark-900 flex flex-col items-center pt-12 ${fontClass}`}
    >
      <h1 className="text-white text-3xl mb-12">pomodoro</h1>

      {/* TODO: add time controls here */}

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
