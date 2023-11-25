import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../Classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { codEditora } = req.query;
      const editora = controleEditora.getNomeEditora(Number(codEditora));
      return res.status(200).json({ editora });
    } else {
      return res.status(405).end();
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
