import { useState } from "react";
import "./Nav.scss";

export const Nav = ({ theme, setTheme }) => {

  const [isActive, setIsActive] = useState(0);

  return (
    <div className="nav">
      <div className="calc-text">calc</div>
      <div className="theme">
        <div className="theme-text">THEME</div>
        <div className="theme-slider">
          <div className="nums">1 2 3</div>
          <div className="toggle">
            {Array.from({length: 3}, (_, i) => i)
              .map((_, index) => (
                <input
                  key={index}
                  className={index === isActive ? "theme-on" : "theme-off"}
                  type="radio"
                  name="toggle"
                  value={index}
                  onClick={() => {
                    setIsActive(index);
                    console.log(index)
                    setTheme(index + 1);
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
