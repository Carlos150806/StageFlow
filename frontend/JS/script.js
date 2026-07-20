const seletorTipo = document.getElementById('tipo-usuario');

if (seletorTipo) {
  const forms = {
    estudante: document.getElementById('form-estudante'),
    empresa: document.getElementById('form-empresa'),
    instituicao: document.getElementById('form-instituicao'),
  };

  // Mostra só o formulário do tipo selecionado, esconde os outros.
  function atualizarFormularioVisivel() {
    for (const tipo in forms) {
      forms[tipo].hidden = tipo !== seletorTipo.value;
    }
  }

  seletorTipo.addEventListener('change', atualizarFormularioVisivel);
  atualizarFormularioVisivel(); // roda uma vez ao carregar a página

  forms.estudante.addEventListener('submit', (evento) =>
    enviarCadastro(evento, 'estudante', {
      nome: document.getElementById('est-nome').value,
      cpf: document.getElementById('est-cpf').value,
      dataNascimento: document.getElementById('est-data-nascimento').value,
      numeroContato: document.getElementById('est-numero-contato').value,
      email: document.getElementById('est-email').value,
      senha: document.getElementById('est-senha').value,
      endereco: document.getElementById('est-endereco').value,
      bairro: document.getElementById('est-bairro').value,
      cidade: document.getElementById('est-cidade').value,
      instituicaoId: document.getElementById('est-instituicao-id').value || null,
      cursando: document.getElementById('est-cursando').value,
      periodoEnsino: document.getElementById('est-periodo-ensino').value,
      turnoEstudo: document.getElementById('est-turno-estudo').value,
      pcd: document.getElementById('est-pcd').checked,
      tipoDeficiencia: document.getElementById('est-tipo-deficiencia').value || null,
      nomeResponsavel: document.getElementById('est-nome-responsavel').value || null,
      numeroResponsavel: document.getElementById('est-numero-responsavel').value || null,
    }),
  );

  forms.empresa.addEventListener('submit', (evento) =>
    enviarCadastro(evento, 'empresa', {
      cnpj: document.getElementById('emp-cnpj').value,
      nome: document.getElementById('emp-nome').value,
      email: document.getElementById('emp-email').value,
      senha: document.getElementById('emp-senha').value,
      endereco: document.getElementById('emp-endereco').value,
      nomeResponsavel: document.getElementById('emp-nome-responsavel').value || null,
      numeroContato: document.getElementById('emp-numero-contato').value || null,
    }),
  );

  forms.instituicao.addEventListener('submit', (evento) =>
    enviarCadastro(evento, 'instituicao', {
      cnpj: document.getElementById('inst-cnpj').value,
      nome: document.getElementById('inst-nome').value,
      nomeFantasia: document.getElementById('inst-nome-fantasia').value || null,
      email: document.getElementById('inst-email').value,
      senha: document.getElementById('inst-senha').value,
      endereco: document.getElementById('inst-endereco').value,
      cidadeOuEstado: document.getElementById('inst-cidade-estado').value,
      siteInstitucional: document.getElementById('inst-site').value || null,
      nomeResponsavel: document.getElementById('inst-nome-responsavel').value,
      numeroResponsavel: document.getElementById('inst-numero-responsavel').value,
      cargoOuFuncao: document.getElementById('inst-cargo').value,
      departamentoOuSetor: document.getElementById('inst-departamento').value,
      modeloAtuacao: document.getElementById('inst-modelo-atuacao').value,
      numeroContato: document.getElementById('inst-numero-contato').value,
    }),
  );
}