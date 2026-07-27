import "../../styles/globalusuario.css";

export default function Dashboard ({ children, Titulo }) {

    return (
        <div className="separacao">
                <aside className="menu">
                    <nav className="items">
                        <a href="#" className="item">📊</a>
                        <a href="#" className="item">📄</a>
                        <a href="#" className="item">🎓</a>
                    </nav>
                    <div className="itemsBaixo">
                        <a href="#" className="item">🚪</a>
                    </div>
                </aside>
            
                <div className="principal">

                    <header className="cabecalho">
                        <h1 className="titulo">{Titulo}</h1>
                    </header>

                    <main className="conteudo">
                        { children }
                    </main>

                    <footer>
                        <p>&copy; Feito por Next Gen Devs</p>
                    </footer>

                </div>
        </div>
    );
}