import classNames from "classnames";
import { useTimer } from "hooks/useTimer";
import { useEffect, FC } from "react";
import TimerItem from "./TimerItem";
import "./Timer.scss";

export interface ITimerProps {
  className?: string;
  value?: number;
  active?: boolean;
  onFinish?: (isFinished: boolean) => void;
}

export const Timer: FC<ITimerProps> = ({
  className,
  value = 0,
  active = false,
  onFinish,
}) => {
  const [time, setValue, isFinished] = useTimer(value, active);

  useEffect(() => {
    setValue(value);
  }, [value]);

  useEffect(() => {
    isFinished && onFinish?.(true);
  }, [isFinished]);

  return (
    <div className={classNames("Timer", className)}>
      <TimerItem value={time.hours} />
      :
      <TimerItem value={time.minutes} />
      :
      <TimerItem value={time.seconds} />
    </div>
  );
};
