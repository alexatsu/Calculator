import "./Display.scss";

export const Display = ({result}) => {

  return (
    <div className="display">
      <div className="numbers">{result}</div>
    </div>
  );
};
