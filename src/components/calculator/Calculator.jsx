import { Display } from "../display/Display";
import { Nav } from "../nav/Nav";
import { Table } from "../table/Table";
import "./Calculator.scss";

export const Calculator = ({ themeToggle, setThemeToggle }) => {
  return (
    <div className="calc">
      <>
        <Nav themeToggle={themeToggle} setThemeToggle={setThemeToggle} />
        <Display />
        <Table />
      </>
    </div>
  );
};
