import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../../Classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const editoras = controleEditora.getEditoras();
      return res.status(200).json(editoras);
    } else {
      return res.status(405).end();
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
