import Modelo from "./modelos/modelousuario.jsx";
import Style from "../styles/index.module.css";

export default function teste (){
  return (

    <Modelo Titulo = "STAGE FLOW" lang="pt-br">

      <head>
        <title>Stage Flow</title>
      </head>

      <div className={Style.conteudo}>
        <h1>Hola macaquito</h1>
      </div>
      
    </Modelo>
  );
}