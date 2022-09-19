import { Btn } from "./btn/Btn";
import { Reset } from "./longbtn/Reset";
import { Equal } from "./longbtn/Equal";
import "./Table.scss";


export const Table = ({setResult, result}) => {
  
  const checkOps = ["/", "*", "+", "-", "."];
  const handleClick = (value) => {
    if (
      (checkOps.includes(value) && result === "") ||
      (checkOps.includes(value) && checkOps.includes(result.slice(-1)))
    ) {
      return;
    }
    setResult(result + value.toString());
  };
  const resetCalc = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
    if (result === "") return;
  };
  const equalHandler = () => {
    if (result === "") return;
    if (result.slice(-1) === checkOps) return;
    setResult(eval(result.toString()))
  };

  return (
    <div className="table">
      <div className="sm-btn">
        <Btn value="7" onClick={() => handleClick(7)} />
        <Btn value="8" onClick={() => handleClick(8)} />
        <Btn value="9" onClick={() => handleClick(9)} />
        <Btn value="DEL" onClick={backspace} />
        <Btn value="4" onClick={() => handleClick(4)} />
        <Btn value="5" onClick={() => handleClick(5)} />
        <Btn value="6" onClick={() => handleClick(6)} />
        <Btn value="+" onClick={() => handleClick("+")} />
        <Btn value="1" onClick={() => handleClick(1)} />
        <Btn value="2" onClick={() => handleClick(2)} />
        <Btn value="3" onClick={() => handleClick(3)} />
        <Btn value="-" onClick={() => handleClick("-")} />
        <Btn value="." onClick={() => handleClick(".")} />
        <Btn value="0" onClick={() => handleClick(0)} />
        <Btn value="/" onClick={() => handleClick("/")} />
        <Btn value="x" onClick={() => handleClick("*")} />
      </div>
      <div className="long-btn">
        <Reset onClick={resetCalc} />
        <Equal onClick={equalHandler} />
      </div>
    </div>
  );
};
