import React, {Component} from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

  class Content extends Component{
      render(){
          return(
            <section>{conteudos.map((element) =>(
                <div>
                <h3>{`O conteudo é: ${element.conteudo}`}</h3>
                    <p>{`status: ${element.status}`}</p>
                    <p>{`bloco: ${element.bloco}`}</p>
                </div>
            ))}
            </section>
          )
      }
  }

  export default Content