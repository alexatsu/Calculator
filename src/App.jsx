import { useState, useEffect } from "react";
import "./App.scss";
import { Calculator } from "./components/calculator/Calculator";

export const App = () => {
  // app state
  const [theme, setTheme] = useState("theme1");
  
  useEffect(() => {
    if (theme === 1) {
      document.body.className = "theme1";
    } else if (theme === 2) {
      document.body.className = "theme2";
    } else if (theme === 3) {
      document.body.className = "theme3";
    }
  }, [theme])
  
  return (
    <>
      <Calculator theme={theme} setTheme={setTheme} />
    </>
  );
};
