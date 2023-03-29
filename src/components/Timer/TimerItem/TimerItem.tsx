import { FC, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./TimerItem.scss";

export interface ITimerItemProps {
  className?: string;
  value: number;
}

export const TimerItem: FC<ITimerItemProps> = ({ className, value }) => {
  const nodeRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted((prev) => !prev);
  }, [value]);

  return (
    <div className="TimerItem">
      <CSSTransition
        nodeRef={nodeRef}
        in={isMounted}
        timeout={200}
        classNames="TimerItem"
      >
        <div ref={nodeRef}>{value.toString().padStart(2, "0")}</div>
      </CSSTransition>
    </div>
  );
};
