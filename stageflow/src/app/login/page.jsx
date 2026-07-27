export default function login(){
  return(
    <div>

      <h1>Login</h1>

      <div class="campo">
        
        <label for="usuario">Email :</label>
        <input type="text" id="usuario" name="Email" placeholder="Digite seu Email" ></input>

      </div>

      <div class="campo">
            
      <label for="usuario">Senha :</label>
      <input type="text" id="usuario" name="Senha" placeholder="Digite sua Senha" ></input>

      </div>

      <a href="../cadastro">faça seu cadastro</a>

    </div>
  )
}