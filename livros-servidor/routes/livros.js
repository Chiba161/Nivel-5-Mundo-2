const express = require('express');
const router = express.Router();
const LivroDAO = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  try {
    const livros = await LivroDAO.obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const novoLivro = req.body;
    const livroInserido = await LivroDAO.incluir(novoLivro);
    res.json({ message: 'Livro inserido com sucesso', livro: livroInserido });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const resultado = await LivroDAO.excluir(_id);
    if (resultado.deletedCount > 0) {
      res.json({ message: 'Livro excluído com sucesso' });
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
