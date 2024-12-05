import { useState, useEffect, useCallback } from "react";
import { formatTimeDisplay } from "../utils/time";

export const useTimer = (duration: number) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(100);

  const formatTime = formatTimeDisplay;

  const toggleTimer = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const resetTimer = useCallback(() => {
    setIsActive(false);
    setProgress(100);
    setTimeLeft(duration * 60);
  }, [duration]);

  useEffect(() => {
    resetTimer();
  }, [duration, resetTimer]);

  useEffect(() => {
    let interval: number | undefined = undefined;

    if (isActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          setProgress((newTime / duration) * 60 * 100);
          return newTime;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      const audio = new Audio(
        "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
      );
      audio.play();
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, duration]);

  return {
    timeLeft,
    isActive,
    progress,
    formatTime,
    toggleTimer,
    resetTimer,
  };
};
