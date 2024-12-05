import { Theme } from "../types/global";

export const getColorClass = (color: string) => {
  switch (color) {
    case "coral":
      return "text-coral-500";
    case "cyan":
      return "text-cyan-500";
    case "violet":
      return "text-violet-500";
    default:
      return "text-coral-900";
  }
};

export const getTheme = (color: string): Theme => {
  switch (color) {
    case "coral":
      return {
        primary: "#f87070",
        background: "#1e213f",
        text: "#d7e0ff",
        surface: "#161932",
      };
    case "cyan":
      return {
        primary: "#70f3f8",
        background: "#1e213f",
        text: "#d7e0ff",
        surface: "#161932",
      };
    case "violet":
      return {
        primary: "#d881f8",
        background: "#1e213f",
        text: "#d7e0ff",
        surface: "#161932",
      };
    default:
      return {
        primary: "#f87070",
        background: "#1e213f",
        text: "#d7e0ff",
        surface: "#161932",
      };
  }
};
