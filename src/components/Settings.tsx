import { FC, useState } from "react";
import { Settings as SettingsIcon, X } from "lucide-react";

import { SettingsProps } from "../types/global";

const Settings: FC<SettingsProps> = ({ settings, onSettingsChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const fonts = ["inter", "roboto", "poppings"];
  const colors = ["yellow", "cyan", "violet"];

  const handleTimeChange = (key: keyof TimerSettings, value: number) => {
    onSettingsChange({
      ...settings,
      [key]: value,
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 text-gray-400 hover:text-white transition-colors"
      >
        <SettingsIcon size={28} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-3xl p-8 w-[540px] max-w-[90vw]">
            <div className="flex justify-between items-center mb-8 border-b pb-6">
              <h2 className="text-2xl font-bold text-dark-900">Settings</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-dark-900"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold tracking-[5px] text-dark-900 text-center mb-4">
                  TIME (MINUTES)
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {["pomodoro", "shortBreak", "longBreak"].map((key) => (
                    <div key={key} className="flex flex-col gap-2">
                      <label className="text-xs text-gray-500">
                        {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="60"
                        value={settings[key as keyof TimerSettings]}
                        onChange={(e) =>
                          handleTimeChange(
                            key as keyof TimerSettings,
                            Math.min(
                              60,
                              Math.max(1, parseInt(e.target.value) || 1)
                            )
                          )
                        }
                        className="w-full p-3 bg-gray-100 rounded-lg text-sm font-bold text-dark-900"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xs font-bold tracking-[5px] text-dark-900 text-center mb-4">
                  FONT
                </h3>
                <div className="flex gap-4 justify-center">
                  {fonts.map((font) => (
                    <button
                      key={font}
                      onClick={() => onSettingsChange({ ...settings, font })}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        settings.font === font
                          ? "bg-dark-900 text-white"
                          : "bg-gray-100 text-dark-900"
                      }`}
                    >
                      <span className={`font-${font}`}>Aa</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xs font-bold tracking-[5px] text-dark-900 text-center mb-4">
                  COLOR
                </h3>
                <div className="flex gap-4 justify-center">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => onSettingsChange({ ...settings, color })}
                      className={`w-10 h-10 rounded-full ${
                        color === "yellow"
                          ? "bg-yellow-500"
                          : color === "cyan"
                          ? "bg-cyan-500"
                          : "bg-violet-500"
                      } ${
                        settings.color === color
                          ? "ring-2 ring-offset-2 ring-dark-900"
                          : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Settings.displayName = "Settings";

export default Settings;
