import Link from 'next/link';
import "../../styles/inicial.css";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>

      <div className="campo">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Digite seu Email" 
        />
      </div>

      <div className="campo">
        <label htmlFor="senha">Senha:</label>
        <input 
          type="password" 
          id="senha" 
          name="senha" 
          placeholder="Digite sua Senha" 
        />
      </div>

      <Link href="/cadastro">Faça seu cadastro</Link>
    </div>
  );
}