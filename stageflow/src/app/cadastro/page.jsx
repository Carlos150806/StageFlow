'use client';

import { useState } from 'react';
import Link from 'next/link';
import "../../styles/inicial.css";

export default function Cadastro() {
  // Estado para armazenar o tipo de usuário selecionado (inicia como 'estudante')
  const [tipoUsuario, setTipoUsuario] = useState('estudante');

  return (
    <div>
      <h1>Cadastro</h1>

      {/* Seleção do Tipo de Usuário */}
      <div className="campo">
        <label htmlFor="tipo-usuario">Eu sou:</label>
        <select id="tipo-usuario" name="tipo-usuario"value={tipoUsuario}onChange={(e) => setTipoUsuario(e.target.value)}>
          <option value="estudante">Estudante</option>
          <option value="empresa">Empresa</option>
          <option value="instituicao">Instituição</option>
        </select>
      </div>

      {/* ================= CAMPOS COMUNS A TODOS ================= */}
      <div className="campo">
        <label htmlFor="nome">
          {tipoUsuario === 'empresa' ? 'Nome da Empresa:' : tipoUsuario === 'instituicao' ? 'Nome da Instituição:' : 'Nome:'}
        </label>
        <input type="text" id="nome" name="nome" placeholder={tipoUsuario === 'empresa' ? 'Digite o nome da empresa' : tipoUsuario === 'instituicao' ? 'Digite o nome da instituição' : 'Digite seu nome'} />
      </div>

      <div className="campo">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="Digite o e-mail" />
      </div>

      <div className="campo">
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" placeholder="Digite a senha" />
      </div>


      {/* ================= CAMPOS ESPECÍFICOS DE ESTUDANTE ================= */}
      {tipoUsuario === 'estudante' && (
        <>
          <div className="campo">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" />
          </div>

          <div className="campo">
            <label htmlFor="data-nascimento">Data de Nascimento:</label>
            <input type="date" id="data-nascimento" name="data-nascimento" />
          </div>

          <div className="campo">
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" />
          </div>
        </>
      )}


      {/* ================= CAMPOS ESPECÍFICOS DE EMPRESA ================= */}
      {tipoUsuario === 'empresa' && (
        <>
          <div className="campo">
            <label htmlFor="cnpj">CNPJ:</label>
            <input type="text" id="cnpj" name="cnpj" placeholder="Digite o CNPJ" />
          </div>

          <div className="campo">
            <label htmlFor="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" placeholder="Digite o endereço completo" />
          </div>

          <div className="campo">
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" placeholder="Digite o telefone comercial" />
          </div>
        </>
      )}


      {/* ================= CAMPOS ESPECÍFICOS DE INSTITUIÇÃO ================= */}
      {tipoUsuario === 'instituicao' && (
        <>
          <div className="campo">
            <label htmlFor="cnpj">CNPJ:</label>
            <input type="text" id="cnpj" name="cnpj" placeholder="Digite o CNPJ da instituição" />
          </div>

          <div className="campo">
            <label htmlFor="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" placeholder="Digite o endereço da instituição" />
          </div>

          <div className="campo">
            <label htmlFor="nome-responsavel">Nome do Responsável:</label>
            <input type="text" id="nome-responsavel" name="nome-responsavel" placeholder="Digite o nome do responsável" />
          </div>

          <div className="campo">
            <label htmlFor="telefone-institucional">Telefone Institucional:</label>
            <input type="tel" id="telefone-institucional" name="telefone-institucional" placeholder="Digite o telefone institucional" />
          </div>

          <div className="campo">
            <label htmlFor="telefone-responsavel">Telefone do Responsável:</label>
            <input type="tel" id="telefone-responsavel" name="telefone-responsavel" placeholder="Digite o telefone do responsável" />
          </div>
        </>
      )}

      <Link href="/login">Faça seu login</Link>
    </div>
  );
}