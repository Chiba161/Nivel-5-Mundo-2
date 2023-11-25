import React, { useState, useEffect } from 'react';
import LinhaLivro from './LinhaLivro';
import ControleLivros from './controle/ControleLivros';

function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const controlador = new ControleLivros();

  useEffect(() => {
    controlador.obterLivros().then(novosLivros => {
      setLivros(novosLivros);
      setCarregado(true);
    }).catch(error => {
      console.error('Erro ao obter livros:', error);
      setCarregado(false);
    });
  }, []);

  const excluir = async (index, codigoLivro) => {
    try {
      await controlador.excluir(codigoLivro);
      setLivros(livros => livros.filter((livro, i) => i !== index));
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Livros</h2>
      {carregado ? (
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Resumo</th>
              <th>Autores</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <LinhaLivro
                key={index}
                codigo={livro.codigo}
                titulo={livro.titulo}
                resumo={livro.resumo}
                autores={livro.autores}
                onExcluir={() => excluir(index, livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando livros...</p>
      )}
    </div>
  );
}

export default LivroLista;
