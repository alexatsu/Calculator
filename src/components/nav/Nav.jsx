import { useState } from "react";
import "./Nav.scss";

export const Nav = () => {

  const [themeToggle, setThemeToggle] = useState(null);
  const [isActive, setIsActive] = useState(0);

    const themeSwitch = (num) => {
      setThemeToggle(num);
      console.log(num);
    }
  return (
    <div className="nav">
      <div className="calc-text">calc
      </div>
      <div className="theme">
        <div className="theme-text">THEME</div>
        <div className="theme-slider">
          <div className="nums">1 2 3</div>
          <div className="toggle">
            {Array(3).fill().map((_, index) => 
               (
                <input 
                className={index === isActive ? "theme-on" : "theme-off"}
                type="radio" 
                name="toggle" 
                value={index}
                onClick={() => {
                  setIsActive(index)
                  setThemeToggle(index);
                }} />
              )
            )}
            {/* <input 
              className="radio-btn"
              type="radio" 
              name="toggle" 
              value="1"
              onClick={() => {themeSwitch(1)}} />
            <input
              className="radio-btn" 
              type="radio" 
              name="toggle"
              value="2"
              onClick={() => {themeSwitch(2)}} />
            <input
              className="radio-btn"
              type="radio"
              name="toggle"
              value="3"
              onClick={() => {themeSwitch(3)}} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
