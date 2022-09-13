import { Display } from "../display/Display";
import { Nav } from "../nav/Nav";
import "./Calculator.scss";

export const Calculator = () => {
  return (
    <div className="calc">
      <>
        <Nav />
        <Display />
      </>
    </div>
  );
};
