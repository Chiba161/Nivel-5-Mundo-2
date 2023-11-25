import React from 'react';
import ControleLivros from './controle/ControleLivros';
import { useHistory } from 'react-router-dom';


function LivroDados() {
  const controlador = new ControleLivros();
  const history = useHistory();

  const incluir = async (livro) => {
    try {
      livro.codigo = '';
      await controlador.incluir(livro);
      history.push('/');
    } catch (error) {
      console.error('Erro ao incluir livro:', error);
    }
  };

  return (
    <div>
      <h2>Incluir Livro</h2>
      {}
    </div>
  );
}

export default LivroDados;
