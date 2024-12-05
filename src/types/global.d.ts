export type TimerMode = "pomodoro" | "shortBreak" | "longBreak";

export interface TimerSettings {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  font: string;
  color: string;
}

export interface TimerControlsProps {
  currentMode: TimerMode;
  onModeChange: (mode: TimerMode) => void;
  color: string;
}

export interface CircularProgressProps {
  progress: number;
  color: string;
  children: React.ReactNode;
}

export interface SettingsProps {
  settings: TimerSettings;
  onSettingsChange: (settings: TimerSettings) => void;
}

export interface Theme {
  primary: string;
  background: string;
  text: string;
  surface: string;
}
