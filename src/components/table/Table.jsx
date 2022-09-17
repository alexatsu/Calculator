import { Btn } from "./btn/Btn";
import { Reset } from "./longbtn/Reset";
import { Equal } from "./longbtn/Equal";
import "./Table.scss";
import { decrement, increment, add7, add8, add9, deleteNum } from "../../store/displaySlice";
import { useDispatch } from "react-redux";

export const Table = () => {
  const dispatch = useDispatch();

  return (
    <div className="table">
      <div className="sm-btn">
        <Btn value="7" listener={() => dispatch(add7())} />
        <Btn value="8" listener={() => dispatch(add8())} />
        <Btn value="9" listener={() => dispatch(add9())} />
        <Btn value="DEL" listener={() => dispatch(deleteNum())} />
        <Btn value="4" />
        <Btn value="5" />
        <Btn value="6" />
        <Btn value="+" listener={() => dispatch(increment())} />
        <Btn value="1" />
        <Btn value="2" />
        <Btn value="3" />
        <Btn value="-" listener={() => dispatch(decrement())} />
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
