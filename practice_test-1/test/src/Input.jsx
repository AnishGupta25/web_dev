import "./Input.css";

let Input = (props) =>{
    return (
        <div className = "Input-wrapper">
            <div className = "Result">
                <h1>{props.Result}</h1>
            </div>
            <div className = "Equation">
                <h3>{props.Equation}</h3>
            </div>
        </div>
    );
}

export default Input;