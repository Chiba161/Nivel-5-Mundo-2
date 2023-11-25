import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Menu from '../pages/Menu';
import { LinhaLivro, TipoLivro } from '../Classes/componentes/LinhaLivro';
import ControleLivros from '../controle/ControleLivros';
import Livro from '../modelo/Livro';

const LivroLista = () => {
  const [livros, setLivros] = useState<TipoLivro[]>([]);
  const controleLivros = new ControleLivros();

  useEffect(() => {
    async function fetchLivros() {
      try {
        const livrosRetornados = await controleLivros.obterTodos();
        const livrosConvertidos: TipoLivro[] = livrosRetornados.map((livro: Livro) => ({
          codigo: typeof livro.codigo === 'string' ? Number(livro.codigo) : livro.codigo as number,
          codEditora: livro.codEditora,
          titulo: livro.titulo,
          resumo: livro.resumo,
          autores: livro.autores
        }));
        setLivros(livrosConvertidos);
      } catch (error) {
        console.error('Erro ao buscar os livros:', error);
      }
    }
    fetchLivros();
  }, []);

  const handleExcluirLivro = async (codigo: string | number) => {
    try {
      await controleLivros.excluir(String(codigo));
      setLivros(livros.filter((livro) => String(livro.codigo) !== String(codigo)));
    } catch (error) {
      console.error('Erro ao excluir o livro:', error);
    }
  };

  return (
    <div>
      <Head>
        <title>Livro Lista</title>
      </Head>
      <Menu />
      <main>
        <h1>Lista de Livros</h1>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Autores</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <LinhaLivro key={index} livro={livro} excluirLivro={handleExcluirLivro} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
