import { Display } from "../display/Display";
import { Nav } from "../nav/Nav";
import { Table } from "../table/Table";
import "./Calculator.scss";
import { useState } from "react";

export const Calculator = () => {
  const [result, setResult] = useState("");
  return (
    <div className="calc">
        <Nav />
        <Display result={result}/>
        <Table result={result} setResult={setResult}/>
    </div>
  );
};
