import "./App.css";
import ClassCard from "./components/ClassCard";
import PageHeader from "./components/PageHeader";
import Sidebar from "./components/Sidebar";

function App() {
    const utente = { nome: 'Davide Russo', ruolo: 'Docente' }

    const classi = [
        {nome: '1A', materia: 'Matematica', studenti: 25, coordinatore: true, prossimaVerifica: 'Equazioni · gio 5 nov, 9:00', daCorreggere: 5},
        {nome: '1C', materia: 'Matematica', studenti: 24, coordinatore: false, prossimaVerifica: '', daCorreggere: 0},
        {nome: '2B', materia: 'Matematica', studenti: 26, coordinatore: false, prossimaVerifica: 'Sistemi lineari · lun 9 nov, 8:00', daCorreggere: 0},
        {nome: '5A', materia: 'Matematica', studenti: 23, coordinatore: false, prossimaVerifica: 'Derivate · mer 11 nov, 11:00', daCorreggere: 12},
    ]

    return (
        <div className="app">
            <Sidebar utente={utente} />
            <main className="contenuto">
                <PageHeader titolo="Le mie classi" sottotitolo="Anno scolastico 2026/27 · 1° quadrimestre · 4 assegnazioni"/>
                <section className="classi-griglia">
                    {classi.map((classe) => {
                        return(
                            <ClassCard
                                key={classe.nome}
                                nome={classe.nome}
                                materia={classe.materia}
                                studenti={classe.studenti}
                                coordinatore={classe.coordinatore}
                                prossimaVerifica={classe.prossimaVerifica}
                                daCorreggere={classe.daCorreggere}
                            />
                        )
                    })}
                </section>
            </main>
        </div>
    )
}

export default App;
