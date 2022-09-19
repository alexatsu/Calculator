import { useState, useEffect } from "react";

export const useTheme = () => {
  const themes = ["bubblegum", "light", "magenta", "blue"];
  const retrievedThemesFromLS = localStorage.getItem("themes");
  const [currentTheme, setCurrentTheme] = useState("blue");

  useEffect(() => {
    document.body.className = currentTheme
    setCurrentTheme(localStorage.getItem("themes"))
  }, [currentTheme]);
  console.log(retrievedThemesFromLS)

  const onClickHandler = (index) => {
    const filtered = themes.filter((theme, idx) => idx === index);
    setCurrentTheme(filtered);
    localStorage.setItem("themes", JSON.stringify([...filtered]));
  };

  return {
    onClickHandler,
    currentTheme,
    themes,
    setCurrentTheme,
  };
};
