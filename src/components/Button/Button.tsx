import classNames from "classnames";
import { FC } from "react";
import "./Button.scss";

export interface IButtonProps extends React.DOMAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  isDisabled,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        "Button",
        {
          Button__disabled: isDisabled,
        },
        className
      )}
      onClick={isDisabled ? undefined : onClick}
      {...rest}
    >
      <span> {children}</span>
    </button>
  );
};
