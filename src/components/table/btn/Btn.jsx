import "./Btn.scss";
export const Btn = ({ value, btnType }) => {
    return (
        <div className={`btn ${btnType === "del" && "btndel"}`}>{value}</div>  
    )
}