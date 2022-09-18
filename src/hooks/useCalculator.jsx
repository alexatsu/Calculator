import { useState } from "react";
import { singletonHook } from 'react-singleton-hook';

const init = 0;
const useCalculatorSingleton = () => {
  const [count, setCount] = useState(init);
  const increment = () => {
    setCount(n => n + 1);
  };

  return {
    count,
    increment,
  };
};
export const useCalculator = singletonHook(init, useCalculatorSingleton);