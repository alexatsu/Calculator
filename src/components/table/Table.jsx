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
    setResult(eval(result.toString()));
  };

  return (
    <div className="table">
      <div className="sm-btn">
        <Btn value="7" listener={() => handleClick(7)} />
        <Btn value="8" listener={() => handleClick(8)} />
        <Btn value="9" listener={() => handleClick(9)} />
        <Btn value="DEL" listener={backspace} />
        <Btn value="4" listener={() => handleClick(4)} />
        <Btn value="5" listener={() => handleClick(5)} />
        <Btn value="6" listener={() => handleClick(6)} />
        <Btn value="+" listener={() => handleClick("+")} />
        <Btn value="1" listener={() => handleClick(1)} />
        <Btn value="2" listener={() => handleClick(2)} />
        <Btn value="3" listener={() => handleClick(3)} />
        <Btn value="-" listener={() => handleClick("-")} />
        <Btn value="." listener={() => handleClick(".")} />
        <Btn value="0" listener={() => handleClick(0)} />
        <Btn value="/" listener={() => handleClick("/")} />
        <Btn value="x" listener={() => handleClick("*")} />
      </div>
      <div className="long-btn">
        <Reset listener={resetCalc} />
        <Equal listener={equalHandler} />
      </div>
    </div>
  );
};
