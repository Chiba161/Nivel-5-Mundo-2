import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '../../../Classes/controle/ControleLivros';

const controleLivro = new ControleLivro();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'DELETE') {
      const { codigo } = req.query;
      if (codigo) {
        await controleLivro.excluir(codigo.toString());
        return res.status(200).json({ message: 'Livro excluído com sucesso' });
      } else {
        return res.status(400).json({ error: 'Código não fornecido' });
      }
    } else {
      return res.status(405).end();
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
