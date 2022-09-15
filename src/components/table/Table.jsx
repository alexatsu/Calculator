import { Btn } from "./btn/Btn";
import { Reset } from "./longbtn/Reset";
import { Equal } from "./longbtn/Equal";
import "./Table.scss";
import { numbs } from "../../utils";

export const Table = () => {
  return (
    <div className="table">
      <div className="sm-btn">
        {numbs.map((n) => {
          return <Btn {...n} />;
        })}
      </div>
      <div className="long-btn">
        <Reset />
        <Equal />
      </div>
    </div>
  );
};
