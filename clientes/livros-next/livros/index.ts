import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '../Classes/controle/ControleLivros';

const controleLivro = new ControleLivro();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const livros = await controleLivro.obterLivros();
      return res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const { titulo, resumo, autores } = req.body;
      const novoLivro = {
        codigo: '',
        codEditora: 0,
        titulo,
        resumo,
        autores: autores.split('\n')
      };
      await controleLivro.incluir(novoLivro);
      const livros = await controleLivro.obterLivros();
      return res.status(200).json({ message: 'Livro adicionado com sucesso', livros });
    } else {
      return res.status(405).end();
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
