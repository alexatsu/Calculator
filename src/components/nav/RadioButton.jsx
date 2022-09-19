export function RadioButton({ setTheme, currentTheme, theme }) {
  const active = currentTheme === theme ? "theme-on" : "theme-off";

  const onRadioChange = (e) => {
    const newTheme = e.currentTarget.value;
    setTheme(newTheme);
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
