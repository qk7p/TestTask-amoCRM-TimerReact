import classNames from "classnames";
import { FC } from "react";
import "./Input.scss";

export interface IInputProps {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Input: FC<IInputProps> = ({ className, onChange, value }) => {
  return (
    <input
      className={classNames("Input", className)}
      onChange={onChange}
      value={value}
    ></input>
  );
};
