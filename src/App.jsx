import { useState } from "react";
import "./App.scss";
import { Calculator } from "./components/calculator/Calculator";

export const App = () => {
  // app state
  const [themeToggle, setThemeToggle] = useState("");
  console.log(themeToggle);
  
    if (themeToggle === 0) {
      document.body.className = "theme1";
    } else if (themeToggle === 1) {
      document.body.className = "theme2";
    } else if (themeToggle === 2) {
      document.body.className = "theme3";
    }
  
  return (
    <>
      <Calculator themeToggle={themeToggle} setThemeToggle={setThemeToggle} />
    </>
  );
};
