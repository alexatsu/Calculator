import { Btn } from "./btn/Btn";
import { Reset } from "./longbtn/Reset";
import { Equal } from "./longbtn/Equal";
import "./Table.scss";

export const Table = () => {

  return (
    <div className="table">
      <div className="sm-btn">
        <Btn value="7" />
        <Btn value="8" />
        <Btn value="9" />
        <Btn value="DEL" />
        <Btn value="4" />
        <Btn value="5" />
        <Btn value="6" />
        <Btn value="+" />
        <Btn value="1" />
        <Btn value="2" />
        <Btn value="3" />
        <Btn value="-" />
        <Btn value="." />
        <Btn value="0" />
        <Btn value="/" />
        <Btn value="x" />
      </div>
      <div className="long-btn">
        <Reset />
        <Equal />
      </div>
    </div>
  );
};
