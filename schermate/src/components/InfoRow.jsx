import "./InfoRow.css";

function InfoRow({ etichetta, children }) {
    return (
        <div className="info-row">
            <span className="info-row-etichetta">{etichetta}</span>
            <span className="info-row-valore">{children}</span>
        </div>
    )
}

export default InfoRow;
