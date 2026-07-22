import "../../styles/globalusuario.css";

export default function dashboard ({ children }) {
    return (
        <div className="separacao">
            <aside className="menu">
                <nav className="items">
                    <a href="#" className="item">📊</a>
                    <a href="#" className="item">📄</a>
                    <a href="#" className="item">🎓</a>
                    <a href="#" className="item">🏢</a>
                    <a href="#" className="item">⚠️</a>
                </nav>
                <div className="itemsBaixo">
                    <a href="#" className="item">🚪</a>
                </div>
            </aside>

            <main className="conteudo">
                { children }
            </main>
        </div>
    );
}