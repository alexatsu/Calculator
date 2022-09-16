import "./Display.scss";

import { useDispatch, useSelector } from 'react-redux';
import displaySlice, { setDisplay } from "../../store/displaySlice";

export const Display = () => {


  const { display } = useSelector((state) => state);
  const dispatch = useDispatch();
  const increment = () => {
    let test = display.display + 1;
    dispatch(setDisplay(test))
  }

  return (
    <div className="display">
      <button onClick={increment}>+</button>
      <div className="numbers">{display.display}</div>
    </div>
  );
};
