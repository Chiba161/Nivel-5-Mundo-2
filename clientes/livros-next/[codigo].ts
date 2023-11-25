import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from './Classes/controle/ControleLivros';

const controleLivro = new ControleLivros();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'DELETE') {
      const { codigo } = req.query;
      await controleLivro.excluir(String(codigo));

      return res.status(200).json({ message: 'Livro excluído com sucesso' });
    } else {
      return res.status(405).end();
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
