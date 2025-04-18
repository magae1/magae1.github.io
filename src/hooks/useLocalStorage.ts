import { useEffect, useState } from "react";

const useLocalStorage = <T>(
  key: string,
  initState: T,
): [state: T, (val: T) => void] => {
  const [state, setState] = useState<T>(initState);

  const changeState = (value: T) => {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      try {
        setState(JSON.parse(item) as T);
      } catch {
        localStorage.removeItem(key);
      }
    }
  }, [key]);

  return [state, changeState];
};

export default useLocalStorage;
