import { useState, useRef } from 'react';

export const useTimer = (maxTime: number) => {
  const [time, setTime] = useState(maxTime);
  const interval = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    //start count down
    setTime(maxTime);
    interval.current = setInterval(() => {
      setTime((secondes) => secondes - 1);
    }, 1000);
  };

  const clearTimer = () => {
    clearInterval(interval.current);
  };

  return { time, startTimer, clearTimer };
};
