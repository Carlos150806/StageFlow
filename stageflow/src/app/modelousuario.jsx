import "../styles/globalusuario.css";

export default function Dashboard ({ children }) {

    const Titulo = "titulo";

    return (
        <div className="separacao">
            <div>
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
            
                <div>

                    <header className="cabecalho">
                        <h1>{Titulo}</h1>
                    </header>

                    <main className="conteudo">
                        { children }
                    </main>

                </div>
            </div>
        </div>
    );
}