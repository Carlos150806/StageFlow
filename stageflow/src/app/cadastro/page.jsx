"use client";

import { useState } from "react";
import Link from "next/link";

const TIPOS = [
  { value: "estudante", label: "Estudante" },
  { value: "empresa", label: "Empresa" },
  { value: "instituicao", label: "Instituição de Ensino" },
];

const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#a855f7]";

// Componente pequeno só para não repetir "label + wrapper" em cada campo.
function Campo({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {children}
    </div>
  );
}

export default function CadastroPage() {
  // No HTML original, cada tipo tinha um <form> separado, escondido/mostrado
  // com "hidden". Aqui isso vira: um estado "tipo" que decide qual bloco de
  // campos é renderizado, e três estados (um objeto por tipo) que guardam
  // os valores digitados.
  const [tipo, setTipo] = useState("estudante");
  const [mensagem, setMensagem] = useState({ texto: "", tipo: "" });
  const [carregando, setCarregando] = useState(false);

  const [estudante, setEstudante] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    numeroContato: "",
    email: "",
    senha: "",
    endereco: "",
    bairro: "",
    cidade: "",
    instituicaoId: "",
    cursando: "",
    periodoEnsino: "",
    turnoEstudo: "Matutino",
    pcd: false,
    tipoDeficiencia: "",
    nomeResponsavel: "",
    numeroResponsavel: "",
  });

  const [empresa, setEmpresa] = useState({
    cnpj: "",
    nome: "",
    email: "",
    senha: "",
    endereco: "",
    nomeResponsavel: "",
    numeroContato: "",
  });

  const [instituicao, setInstituicao] = useState({
    cnpj: "",
    nome: "",
    nomeFantasia: "",
    email: "",
    senha: "",
    endereco: "",
    cidadeOuEstado: "",
    siteInstitucional: "",
    nomeResponsavel: "",
    numeroResponsavel: "",
    cargoOuFuncao: "",
    departamentoOuSetor: "",
    modeloAtuacao: "presencial",
    numeroContato: "",
  });

  // Fábrica de "onChange": em vez de escrever uma função para cada input
  // (como o document.getElementById fazia um a um), geramos um handler
  // genérico por tipo de formulário.
  function criarHandler(setState) {
    return (campo) => (evento) => {
      const valor = evento.target.type === "checkbox" ? evento.target.checked : evento.target.value;
      setState((atual) => ({ ...atual, [campo]: valor }));
    };
  }

  const mudarEstudante = criarHandler(setEstudante);
  const mudarEmpresa = criarHandler(setEmpresa);
  const mudarInstituicao = criarHandler(setInstituicao);

  async function handleSubmit(evento) {
    evento.preventDefault();
    setCarregando(true);
    setMensagem({ texto: "", tipo: "" });

    const dados = tipo === "estudante" ? estudante : tipo === "empresa" ? empresa : instituicao;

    try {
      // Ajuste a rota conforme os endpoints reais do seu backend NestJS
      // (ex.: /estudante, /empresa, /instituicao).
      const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${tipo}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!resposta.ok) {
        throw new Error("Não foi possível concluir o cadastro");
      }

      setMensagem({ texto: "Cadastro realizado com sucesso!", tipo: "sucesso" });
    } catch (erro) {
      setMensagem({ texto: erro.message, tipo: "erro" });
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f4f5f7] px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#a855f7]">
        <h1 className="text-2xl font-bold text-[#050b2e] mb-1">Cadastro</h1>
        <p className="text-sm text-gray-500 mb-6">Crie sua conta na StageFlow</p>

        <Campo label="Eu sou:">
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} className={inputClass}>
            {TIPOS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </Campo>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {tipo === "estudante" && (
            <>
              <Campo label="Nome">
                <input required className={inputClass} value={estudante.nome} onChange={mudarEstudante("nome")} />
              </Campo>
              <Campo label="CPF">
                <input required maxLength={11} className={inputClass} value={estudante.cpf} onChange={mudarEstudante("cpf")} />
              </Campo>
              <Campo label="Data de nascimento">
                <input
                  required
                  type="date"
                  className={inputClass}
                  value={estudante.dataNascimento}
                  onChange={mudarEstudante("dataNascimento")}
                />
              </Campo>
              <Campo label="Telefone">
                <input
                  required
                  type="tel"
                  className={inputClass}
                  value={estudante.numeroContato}
                  onChange={mudarEstudante("numeroContato")}
                />
              </Campo>
              <Campo label="E-mail">
                <input required type="email" className={inputClass} value={estudante.email} onChange={mudarEstudante("email")} />
              </Campo>
              <Campo label="Senha">
                <input
                  required
                  type="password"
                  minLength={6}
                  className={inputClass}
                  value={estudante.senha}
                  onChange={mudarEstudante("senha")}
                />
              </Campo>
              <Campo label="Endereço">
                <input required className={inputClass} value={estudante.endereco} onChange={mudarEstudante("endereco")} />
              </Campo>
              <Campo label="Bairro">
                <input required className={inputClass} value={estudante.bairro} onChange={mudarEstudante("bairro")} />
              </Campo>
              <Campo label="Cidade">
                <input required className={inputClass} value={estudante.cidade} onChange={mudarEstudante("cidade")} />
              </Campo>
              <Campo label="ID da instituição de ensino (opcional)">
                <input
                  type="number"
                  className={inputClass}
                  value={estudante.instituicaoId}
                  onChange={mudarEstudante("instituicaoId")}
                />
              </Campo>
              <Campo label="Curso">
                <input required className={inputClass} value={estudante.cursando} onChange={mudarEstudante("cursando")} />
              </Campo>
              <Campo label="Período/semestre">
                <input
                  required
                  className={inputClass}
                  value={estudante.periodoEnsino}
                  onChange={mudarEstudante("periodoEnsino")}
                />
              </Campo>
              <Campo label="Turno">
                <select required className={inputClass} value={estudante.turnoEstudo} onChange={mudarEstudante("turnoEstudo")}>
                  <option value="Matutino">Matutino</option>
                  <option value="Vespertino">Vespertino</option>
                  <option value="Noturno">Noturno</option>
                </select>
              </Campo>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" checked={estudante.pcd} onChange={mudarEstudante("pcd")} />
                Pessoa com deficiência (PCD)
              </label>
              <Campo label="Tipo de deficiência (se PCD)">
                <input className={inputClass} value={estudante.tipoDeficiencia} onChange={mudarEstudante("tipoDeficiencia")} />
              </Campo>
              <Campo label="Nome do responsável (se menor de idade)">
                <input
                  className={inputClass}
                  value={estudante.nomeResponsavel}
                  onChange={mudarEstudante("nomeResponsavel")}
                />
              </Campo>
              <Campo label="Telefone do responsável">
                <input
                  type="tel"
                  className={inputClass}
                  value={estudante.numeroResponsavel}
                  onChange={mudarEstudante("numeroResponsavel")}
                />
              </Campo>
            </>
          )}

          {tipo === "empresa" && (
            <>
              <Campo label="CNPJ">
                <input required maxLength={14} className={inputClass} value={empresa.cnpj} onChange={mudarEmpresa("cnpj")} />
              </Campo>
              <Campo label="Nome">
                <input required className={inputClass} value={empresa.nome} onChange={mudarEmpresa("nome")} />
              </Campo>
              <Campo label="E-mail">
                <input required type="email" className={inputClass} value={empresa.email} onChange={mudarEmpresa("email")} />
              </Campo>
              <Campo label="Senha">
                <input
                  required
                  type="password"
                  minLength={6}
                  className={inputClass}
                  value={empresa.senha}
                  onChange={mudarEmpresa("senha")}
                />
              </Campo>
              <Campo label="Endereço">
                <input required className={inputClass} value={empresa.endereco} onChange={mudarEmpresa("endereco")} />
              </Campo>
              <Campo label="Nome do responsável">
                <input className={inputClass} value={empresa.nomeResponsavel} onChange={mudarEmpresa("nomeResponsavel")} />
              </Campo>
              <Campo label="Telefone">
                <input type="tel" className={inputClass} value={empresa.numeroContato} onChange={mudarEmpresa("numeroContato")} />
              </Campo>
            </>
          )}

          {tipo === "instituicao" && (
            <>
              <Campo label="CNPJ">
                <input
                  required
                  maxLength={14}
                  className={inputClass}
                  value={instituicao.cnpj}
                  onChange={mudarInstituicao("cnpj")}
                />
              </Campo>
              <Campo label="Nome">
                <input required className={inputClass} value={instituicao.nome} onChange={mudarInstituicao("nome")} />
              </Campo>
              <Campo label="Nome fantasia">
                <input className={inputClass} value={instituicao.nomeFantasia} onChange={mudarInstituicao("nomeFantasia")} />
              </Campo>
              <Campo label="E-mail">
                <input
                  required
                  type="email"
                  className={inputClass}
                  value={instituicao.email}
                  onChange={mudarInstituicao("email")}
                />
              </Campo>
              <Campo label="Senha">
                <input
                  required
                  type="password"
                  minLength={6}
                  className={inputClass}
                  value={instituicao.senha}
                  onChange={mudarInstituicao("senha")}
                />
              </Campo>
              <Campo label="Endereço">
                <input required className={inputClass} value={instituicao.endereco} onChange={mudarInstituicao("endereco")} />
              </Campo>
              <Campo label="Cidade/Estado">
                <input
                  required
                  className={inputClass}
                  value={instituicao.cidadeOuEstado}
                  onChange={mudarInstituicao("cidadeOuEstado")}
                />
              </Campo>
              <Campo label="Site institucional">
                <input
                  type="url"
                  className={inputClass}
                  value={instituicao.siteInstitucional}
                  onChange={mudarInstituicao("siteInstitucional")}
                />
              </Campo>
              <Campo label="Nome do responsável">
                <input
                  required
                  className={inputClass}
                  value={instituicao.nomeResponsavel}
                  onChange={mudarInstituicao("nomeResponsavel")}
                />
              </Campo>
              <Campo label="Telefone do responsável">
                <input
                  required
                  type="tel"
                  className={inputClass}
                  value={instituicao.numeroResponsavel}
                  onChange={mudarInstituicao("numeroResponsavel")}
                />
              </Campo>
              <Campo label="Cargo/função do responsável">
                <input
                  required
                  className={inputClass}
                  value={instituicao.cargoOuFuncao}
                  onChange={mudarInstituicao("cargoOuFuncao")}
                />
              </Campo>
              <Campo label="Departamento/setor">
                <input
                  required
                  className={inputClass}
                  value={instituicao.departamentoOuSetor}
                  onChange={mudarInstituicao("departamentoOuSetor")}
                />
              </Campo>
              <Campo label="Modelo de atuação">
                <select
                  required
                  className={inputClass}
                  value={instituicao.modeloAtuacao}
                  onChange={mudarInstituicao("modeloAtuacao")}
                >
                  <option value="presencial">Presencial</option>
                  <option value="hibrido">Híbrido</option>
                  <option value="remoto">Remoto</option>
                </select>
              </Campo>
              <Campo label="Telefone institucional">
                <input
                  required
                  type="tel"
                  className={inputClass}
                  value={instituicao.numeroContato}
                  onChange={mudarInstituicao("numeroContato")}
                />
              </Campo>
            </>
          )}

          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-[#050b2e] hover:bg-[#0a1550] text-white font-medium rounded-lg py-2.5 transition disabled:opacity-60"
          >
            {carregando ? "Enviando..." : "Cadastrar"}
          </button>
        </form>

        {mensagem.texto && (
          <p className={`mt-4 text-sm ${mensagem.tipo === "erro" ? "text-red-600" : "text-green-600"}`}>
            {mensagem.texto}
          </p>
        )}

        <p className="mt-6 text-sm text-gray-500 text-center">
          Já tem conta?{" "}
          <Link href="/login" className="text-[#a855f7] font-medium hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </main>
  );
}
