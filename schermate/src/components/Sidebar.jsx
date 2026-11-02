import "./Sidebar.css";
import Logo from "./Logo";
import NavItem from "./NavItem";
import UserBadge from "./UserBadge";

function Sidebar({ utente }) {
    const vociMenu = [
        {icona: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icona"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>, etichetta: 'Le mie classi', attiva: true},
        {icona: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icona"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>, etichetta: 'Materiale', attiva: false},
        {icona: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icona"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>, etichetta: 'Verifiche', attiva: false},
        {icona: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icona"><path d="M5 21v-6"/><path d="M12 21V3"/><path d="M19 21V9"/></svg>, etichetta: 'Correzione e voti', attiva: false},
    ]

    return (
        <aside className="sidebar">
            <Logo />
            <nav className="sidebar-nav">
                {vociMenu.map((voce) => {
                    return(
                        <NavItem key={voce.etichetta} icona={voce.icona} etichetta={voce.etichetta} attiva={voce.attiva}/>
                    )
                })}
            </nav>
            <UserBadge nome={utente.nome} ruolo={utente.ruolo}/>
        </aside>
    )
}

export default Sidebar;
