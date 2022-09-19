import { useTheme } from "../../hooks/useTheme";
import "./Nav.scss";

export const Nav = () => {
  const { currentTheme, setCurrentTheme, themes, onClickHandler } = useTheme();
  console.log(currentTheme)
  const radioButtons = themes.map((theme, index) => (
      <RadioButton
        key={theme}
        theme={theme}
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        onClickHandler={() =>onClickHandler(index)}
      />
    ));

  return (
    <div className="nav">
      <div className="calc-text">calc</div>
      <div className="theme">
        <div className="theme-text">THEME</div>
        <div className="theme-slider">
          <div className="nums">{themes.map((_, i ) => i + 1)}</div>
          <div className="toggle">
            {radioButtons}
          </div>
        </div>
      </div>
    </div>
  );
};

function RadioButton({ setTheme, currentTheme, theme, onClickHandler }) {
  const active = currentTheme === theme ? "theme-on" : "theme-off";

  const onRadioChange = (e) => {
    const newTheme = e.currentTarget.value;
    setTheme(newTheme);
    onClickHandler();
    console.log(currentTheme)

  };

  return (
    <input
      className={active}
      type="radio"
      name={theme}
      value={theme}
      onClick={onRadioChange}
    />
  );
}
