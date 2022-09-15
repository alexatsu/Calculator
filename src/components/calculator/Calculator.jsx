import { Display } from "../display/Display";
import { Nav } from "../nav/Nav";
import { Table } from "../table/Table";
import "./Calculator.scss";

export const Calculator = ({ theme, setTheme }) => {
  return (
    <div className="calc">
      <>
        <Nav theme={theme} setTheme={setTheme} />
        <Display />
        <Table />
      </>
    </div>
  );
};
