function UserBadge({ nome, ruolo }) {
    const iniziali = nome ? nome.trim().split(/\s+/).filter(Boolean).map(w => w[0].toUpperCase()).slice(0, 2).join('') : '';

    return (
        <div className="user-badge">
            <span className="user-avatar">{iniziali}</span>
            <div className="user-info">
                <span className="user-nome">{nome}</span>
                <span className="user-ruolo">{ruolo}</span>
            </div>
        </div>
    );
}

export default UserBadge;
