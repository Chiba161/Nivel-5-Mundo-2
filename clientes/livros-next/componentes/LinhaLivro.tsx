import React from 'react';

export type TipoLivro = {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
};

export type LinhaLivroProps = {
  livro: TipoLivro;
  excluirLivro: (codigo: number) => void;
};

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluirLivro }) => {
  const { codigo, titulo, resumo, autores } = livro;

  const handleExcluirClick = () => {
    excluirLivro(codigo);
  };

  return (
    <tr>
      <td>{titulo}</td>
      <td>{resumo}</td>
      <td>{autores.join(', ')}</td>
      <td>
        <button onClick={handleExcluirClick}>Excluir</button>
      </td>
    </tr>
  );
};
