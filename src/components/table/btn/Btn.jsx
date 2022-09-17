import "./Btn.scss";
export const Btn = ({ value, listener }) => {
  return (
    <div onClick={listener} className={`btn ${value === "DEL" ? "btndel" : ""}`}>{value}</div>
  );
};
