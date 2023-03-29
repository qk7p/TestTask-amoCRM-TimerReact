import { useEffect, useState } from "react";

export interface ICountDown {
  hours: number;
  minutes: number;
  seconds: number;
}

export function useTimer(
  initialValue: number,
  active: boolean
): [ICountDown, React.Dispatch<React.SetStateAction<number>>, boolean] {
  const [value, setValue] = useState(initialValue);
  const [time, setTime] = useState<ICountDown>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const currentTime = {
      hours: Math.floor(value / 3600),
      minutes: Math.floor((value % 3600) / 60),
      seconds: value % 60,
    };
    setTime(currentTime);
  }, [value]);

  const timeIsExpired =
    time.hours === 0 && time.minutes === 0 && time.seconds === 0;

  const tick = () => {
    if (timeIsExpired) return;
    else if (time.hours > 0 && time.minutes === 0 && time.seconds === 0) {
      setTime({ hours: time.hours - 1, minutes: 59, seconds: 59 });
    } else if (time.minutes > 0 && time.seconds === 0) {
      setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
    } else {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      if (active && !timeIsExpired) {
        tick();
      } else {
        clearInterval(timerID);
      }
    }, 1000);
    return () => clearInterval(timerID);
  });

  useEffect(() => {
    timeIsExpired ? setIsFinished(true) : setIsFinished(false);
  });

  return [time, setValue, isFinished];
}
