function NavItem({ icona, etichetta, attiva }) {
    return (
        <button className={attiva ? 'nav-item attiva' : 'nav-item'}>
            {icona}
            <span>{etichetta}</span>
        </button>
    )
}

export default NavItem;