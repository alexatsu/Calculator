import { useSelector } from "react-redux";
import { displayValue } from "../../store/displaySlice";
import "./Display.scss";

export const Display = () => {

  const result = useSelector(displayValue);
  
  return (
    <div className="display">
      <div className="numbers">{result}</div>
    </div>
  );
};
