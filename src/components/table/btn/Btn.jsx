import "./Btn.scss";
export const Btn = ({ value }) => {
  return (
    <div className={`btn ${value === "DEL" ? "btndel" : ""}`}>{value}</div>
  );
};
