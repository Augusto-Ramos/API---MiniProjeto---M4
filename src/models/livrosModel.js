const fs = require('fs');
const path = require('path');

const livrosPath = path.join(__dirname, '../database/livros.json');

// Está função serve para ler o arquivo  json
const readJsonFile = () => {
  if (!fs.existsSync(livrosPath)) {
    return [];
  }
  const data = fs.readFileSync(livrosPath);
  return JSON.parse(data);
};

//  função para salvar o arquivo json
const writeJsonFile = (data) => {
  fs.writeFileSync(livrosPath, JSON.stringify(data, null, 2));
};

module.exports = {
  readJsonFile,
  writeJsonFile,
};
