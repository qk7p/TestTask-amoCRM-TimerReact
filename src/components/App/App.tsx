import { useState, FC } from "react";
import { Input, Timer, Button } from "components";
import { useValidateNumbers } from "hooks/useValidateNumbers";
import classNames from "classnames";
import "./App.scss";
import "normalize.css";

export const App: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setValue(event.target.value);
  };

  const [filteredValue, error, setValue] = useValidateNumbers("");

  const [timerValue, setTimerValue] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const handleTimerStart = (event: React.MouseEvent) => {
    if (error === "") {
      setTimerValue(filteredValue);
      setInputValue(filteredValue.toString());
      setIsTimerActive(true);
    }
  };

  const handleTimerStop = (event: React.MouseEvent) => {
    setIsTimerActive(false);
  };

  const handleFinish = (isFinished: boolean) => {
    if (isFinished) setIsTimerActive(false);
  };

  return (
    <div className="App">
      <div className="AppContainer">
        <div className="AppTimerContainer">
          <Timer
            value={timerValue}
            active={isTimerActive}
            onFinish={handleFinish}
          />
        </div>
        <div className="AppInputContainer">
          <Input
            value={inputValue}
            onChange={handleInputChange}
            className={classNames({
              Input__error: error !== "",
            })}
          />
          {error !== "" && <p className="InputErrorText">{error}</p>}
          <Button
            onClick={isTimerActive ? handleTimerStop : handleTimerStart}
            isDisabled={error !== "" && !isTimerActive}
            className="TimerButton"
          >
            {isTimerActive ? "Stop" : "Start"}
          </Button>
        </div>
      </div>
    </div>
  );
};
