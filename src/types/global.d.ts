export type TimerMode = "pomodoro" | "shortBreak" | "longBreak";

export interface TimerSettings {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  font: string;
  color: string;
}

export interface Theme {
  primary: string;
  background: string;
  text: string;
  surface: string;
}
