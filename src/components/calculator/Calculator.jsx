import { Display } from "../display/Display";
import { Nav } from "../nav/Nav";
import { Table } from "../table/Table";
import "./Calculator.scss";

export const Calculator = () => {
  return (
    <div className="calc">
      <>
        <Nav />
        <Display  />
        <Table />
      </>
    </div>
  );
};
