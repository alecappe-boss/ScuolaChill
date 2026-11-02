import "./Badge.css";

function Badge({ variante, children }) {
    return (
        <span className={`badge badge-${variante}`}>{children}</span>
    )
}

export default Badge;
