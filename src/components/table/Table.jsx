import { Btn } from "./btn/Btn";
import { Reset } from "./longbtn/Reset";
import { Equal } from "./longbtn/Equal";
import "./Table.scss";
import { decrement, increment, add7, add8, add9, deleteNum, resetCalc, currentValue } from "../../store/displaySlice";
import { useDispatch } from "react-redux";
import { useState } from "react";


export const Table = () => {
 
  const [number, setNumber] = useState("");
  const [memory, setMemory] = useState([]);

  const numberClickHandler = (value) => {
    const newNum = number + value.toString();
    setNumber(newNum);
    console.log(newNum)
  };
  const expressionHandler = (exp) => {
    setMemory([...memory, number, exp]);
    setNumber("");
  };
  const equalHandler = () => {
    const finalVal = eval(memory.join("") + number);
    console.log(finalVal);
    
  }
  return (
    <div className="table">
      <span className="test">{memory}</span>
      <span className="test">{number}</span>
      
      <div className="sm-btn">
        <Btn value="7" listener={() => numberClickHandler(7)} />
        <Btn value="8" listener={() => numberClickHandler(8)} />
        <Btn value="9" listener={() => numberClickHandler(9)} />
        <Btn value="DEL" />
        <Btn value="4" listener={() => numberClickHandler(4)} />
        <Btn value="5" listener={() => numberClickHandler(5)} />
        <Btn value="6" listener={() => numberClickHandler(6)} />
        <Btn value="+" listener={() => expressionHandler("+")} />
        <Btn value="1" listener={() => numberClickHandler(1)} />
        <Btn value="2" listener={() => numberClickHandler(2)} />
        <Btn value="3" listener={() => numberClickHandler(3)} />
        <Btn value="-" listener={() => expressionHandler("-")} />
        <Btn value="." listener={() => expressionHandler(".")} />
        <Btn value="0" listener={() => numberClickHandler(0)} />
        <Btn value="/" listener={() => expressionHandler("/")} />
        <Btn value="x" listener={() => expressionHandler("x")} />
      </div>
      <div className="long-btn">
        <Reset />
        <Equal listener={equalHandler} />
      </div>
    </div>
  );
};
