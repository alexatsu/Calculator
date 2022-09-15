import { useState } from "react";
import "./Nav.scss";

export const Nav = ({ themeToggle, setThemeToggle }) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="nav">
      <div className="calc-text">calc</div>
      <div className="theme">
        <div className="theme-text">THEME</div>
        <div className="theme-slider">
          <div className="nums">1 2 3</div>
          <div className="toggle">
            {Array(3)
              .fill()
              .map((_, index) => (
                <input
                  className={index === isActive ? "theme-on" : "theme-off"}
                  type="radio"
                  name="toggle"
                  value={index}
                  onClick={() => {
                    setIsActive(index);
                    setThemeToggle(index);
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
