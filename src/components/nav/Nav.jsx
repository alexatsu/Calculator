import "./Nav.scss";
export const Nav = () => {
  return (
    <div className="nav">
      <div className="calc-text">calc</div>
      <div className="theme">
        <div className="theme-text">THEME</div>
        <div className="theme-slider">
          <div className="nums">1 2 3</div>
          <div className="toggle">switch</div>
        </div>
      </div>
    </div>
  );
};
