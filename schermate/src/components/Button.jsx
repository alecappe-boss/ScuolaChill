import "./Button.css";

function Button({ variante, children }) {
    return (
        <button className={`btn btn-${variante}`}>{children}</button>
    )
}

export default Button;
