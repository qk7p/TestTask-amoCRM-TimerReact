import { useEffect, useState } from "react";

export function useValidateNumbers(
  initialValue: string
): [
  value: number,
  error: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
] {
  const [value, setValue] = useState(initialValue);
  const [filteredValue, setFilteredValue] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    setFilteredValue(Number.parseInt(value.replace("/[^d]/", "")));
  }, [value]);

  useEffect(() => {
    if (/\d/.test(value)) {
      const resultToNum = Number.parseInt(value.replace(/[^0-9\-]/g, ""));
      if (resultToNum > 0) {
        setFilteredValue(resultToNum);
        setError("");
      } else {
        setError("Число должно быть больше ноля");
      }
    } else {
      setError("Введите число");
    }
  }, [value]);

  return [filteredValue, error, setValue];
}
