import { useTheme } from "../../hooks/useTheme";
import "./Nav.scss";
import { RadioButton } from "./RadioButton";

export const Nav = () => {
  const { currentTheme, setCurrentTheme, themes } = useTheme();

  const radioButtons = themes.map((theme) => (
    <RadioButton
      key={theme}
      theme={theme}
      currentTheme={currentTheme}
      setTheme={setCurrentTheme}
    />
  ));
  return (
    <div className="nav">
      <div className="calc-text">calc</div>
      <div className="theme">
        <div className="theme-text">THEME</div>
        <div className="theme-slider">
          <div className="nums">{themes.map((_, i) => i + 1)}</div>
          <div className="toggle">{radioButtons}</div>
        </div>
      </div>
    </div>
  );
};
