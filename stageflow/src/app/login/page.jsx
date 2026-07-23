"use client";

import { useState } from "react";
import Link from "next/link";

const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#a855f7]";

export default function LoginPage() {
  // Cada input vira um "estado" controlado pelo React — o valor do campo
  // vive aqui no componente, não no DOM. É o equivalente ao
  // document.getElementById(...).value do script.js original.
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState({ texto: "", tipo: "" });
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(evento) {
    evento.preventDefault(); // evita o reload de página que um <form> faz por padrão
    setCarregando(true);
    setMensagem({ texto: "", tipo: "" });

    try {
      const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (!resposta.ok) {
        throw new Error("E-mail ou senha inválidos");
      }

      // const dados = await resposta.json(); // ex.: token, dados do usuário...
      setMensagem({ texto: "Login realizado com sucesso!", tipo: "sucesso" });
    } catch (erro) {
      setMensagem({ texto: erro.message, tipo: "erro" });
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f4f5f7] px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#a855f7]">
        <h1 className="text-2xl font-bold text-[#050b2e] mb-1">Entrar</h1>
        <p className="text-sm text-gray-500 mb-6">Acesse sua conta StageFlow</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              required
              className={inputClass}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-[#050b2e] hover:bg-[#0a1550] text-white font-medium rounded-lg py-2.5 transition disabled:opacity-60"
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        {mensagem.texto && (
          <p className={`mt-4 text-sm ${mensagem.tipo === "erro" ? "text-red-600" : "text-green-600"}`}>
            {mensagem.texto}
          </p>
        )}

        <p className="mt-6 text-sm text-gray-500 text-center">
          Ainda não tem conta?{" "}
          <Link href="/cadastro" className="text-[#a855f7] font-medium hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </main>
  );
}
