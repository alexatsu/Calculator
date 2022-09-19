import "./Btn.scss";
export const Btn = ({ value, onClick }) => {
  return (
    <div onClick={onClick} className={`btn ${value === "DEL" ? "btndel" : ""}`}>{value}</div>
  );
};
