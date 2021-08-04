import "./button.css";

let Button = (props) => {
    return (
        <div onClick = {() => {
            props.click(props.symbol)
        }} className = "button-wrapper" style = {{backgroundColor:props.color}}>{props.symbol}
        </div>
    );
}

export default Button;