export default function cadastro(){

  return(
  <div>
    
    <h1>cadastro</h1>

      <div class="campo">
      <label for="tipo">Eu sou:</label>
      <select id="tipo-usuario" name="tipo-usuario">
        <option value="estudante">estudante</option>
        <option value="empresa">empresa</option>
        <option value="instituição">instituição</option>
      </select>
      </div>

        <div class="campo">
          
          <label for="usuario">Nome :</label>
          <input type="text" id="usuario" name="Nome" placeholder="Digite seu Nome" ></input>

        </div>

        <div class="campo">
          
          <label for="usuario">Email :</label>
          <input type="email" id="usuario" name="Email" placeholder="Digite seu Email" ></input>

        </div>

        <div class="campo">
              
          <label for="usuario">Senha :</label>
          <input type="senha" id="usuario" name="Senha" placeholder="Digite sua Senha" ></input>

        </div>

        <div class="campo">
          
          <label for="usuario">CPF :</label>
          <input type="cpf" id="usuario" name="CPF" placeholder="Digite seu CPF" ></input>

        </div>

        <div class="campo">

          <label for="usuario">Data Nacimento</label>
          <input type="date" id="usuario" name="Data" placehoder="Digite sua data de nascimento"></input>
        </div>

    <a href="../login">faça seu login</a>

  </div>
)}