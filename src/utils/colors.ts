import { Theme } from "../types/global";

export const getColorClass = (color: string) => {
  switch (color) {
    case "yellow":
      return "text-yellow-500";
    case "cyan":
      return "text-cyan-500";
    case "violet":
      return "text-violet-500";
    default:
      return "text-violet-500";
  }
};

export const getTheme = (color: string): Theme => {
  switch (color) {
    case "yellow":
      return {
        primary: "#fdd835",
        background: "#161932",
        text: "#d7e0ff",
        surface: "#1e213f",
      };
    case "cyan":
      return {
        primary: "#70f3f8",
        background: "#161932",
        text: "#d7e0ff",
        surface: "#1e213f",
      };
    case "violet":
      return {
        primary: "#d881f8",
        background: "#161932",
        text: "#d7e0ff",
        surface: "#1e213f",
      };
    default:
      return {
        primary: "#d881f8",
        background: "#161932",
        text: "#d7e0ff",
        surface: "#1e213f",
      };
  }
};
