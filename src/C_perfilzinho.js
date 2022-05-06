import styles from "./C_perfilzinho.module.css"

function Outros_perfis(pequena_foto, paragrafo){
    return(
        <div className="outros_perfis">
            <div className="perfilzinho">
              <div className="pequena_foto">
                  <img src={pequena_foto}/>
              </div>
              <div className="pequena_descricao">
                  <p>{paragrafo}</p>
              </div>
              <div className="pequeno_seguir">
                <p>Seguir</p>
              </div>
            </div>
          </div>
    );
}
export default Outros_perfis