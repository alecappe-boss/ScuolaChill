import "./ClassCard.css";
import Badge from "./Badge";
import Button from "./Button";
import InfoRow from "./InfoRow";

function ClassCard({ nome, materia, studenti, coordinatore, prossimaVerifica, daCorreggere }) {
    return (
        <article className="class-card">
            <div className="class-card-intestazione">
                <h2 className="class-card-nome">{nome}</h2>
                {coordinatore && <Badge variante="giallo">Coordinatore</Badge>}
            </div>
            <p className="class-card-dettagli">{materia} · {studenti} studenti</p>
            <div className="class-card-info">
                <InfoRow etichetta="Prossima verifica">
                    {prossimaVerifica || 'Nessuna programmata'}
                </InfoRow>
                <InfoRow etichetta="Da correggere">
                    {daCorreggere > 0
                        ? <Badge variante="arancione">{daCorreggere} {daCorreggere === 1 ? 'consegna' : 'consegne'}</Badge>
                        : <Badge variante="verde">Tutto corretto</Badge>}
                </InfoRow>
            </div>
            <div className="class-card-azioni">
                <Button variante="tonale">Materiale</Button>
                <Button variante="tonale">Verifiche</Button>
                <Button variante="tonale">Studenti</Button>
            </div>
        </article>
    )
}

export default ClassCard;
