import "./PageHeader.css";
import Button from "./Button";

function PageHeader({ titolo, sottotitolo }) {
    return (
        <header className="page-header">
            <div>
                <h1 className="page-header-titolo">{titolo}</h1>
                <p className="page-header-sottotitolo">{sottotitolo}</p>
            </div>
            <div className="page-header-azioni">
                <Button variante="secondario">Nuovo materiale</Button>
                <Button variante="primario">Nuova verifica</Button>
            </div>
        </header>
    )
}

export default PageHeader;
