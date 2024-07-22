const express = require('express');
const { readJsonFile, writeJsonFile } = require('./models/livrosModel');
const router = express.Router();

// Rota para mostrar todos os livros

router.get('/livros', (req, res) => {
  const livros = readJsonFile();
  res.json(livros);
});

// Rota para buscar livro pelo id

router.get('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const livros = readJsonFile();
  const livro = livros.find((l) => l.id === id);

  if (!livro) {
    return res.status(404).json({ message: 'Livro não encontrado' });
  }

  res.json(livro);
});

// Rota para buscar livros pelo título

router.get('/livros/titulo/:titulo', (req, res) => {
  const titulo = req.params.titulo.toLowerCase();
  const livros = readJsonFile();
  const livrosPorTitulo = livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(titulo)
  );

  if (livrosPorTitulo.length === 0) {
    return res
      .status(404)
      .json({ message: 'Nenhum livro encontrado com esse título' });
  }

  res.json(livrosPorTitulo);
});

// Rota para buscar livros pelo autor
router.get('/livros/autor/:autor', (req, res) => {
  const autor = req.params.autor.toLowerCase();
  const livros = readJsonFile();
  const livrosPorAutor = livros.filter(
    (livro) => livro.autor.toLowerCase() === autor
  );

  if (livrosPorAutor.length === 0) {
    return res
      .status(404)
      .json({ message: 'Nenhum livro encontrado para esse autor' });
  }

  res.json(livrosPorAutor);
});

module.exports = router;
