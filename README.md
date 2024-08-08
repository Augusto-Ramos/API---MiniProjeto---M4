API de Livros Anti-Racismo

Olá a todos! Hoje venho apresentar minha primeira API. Ela foi criada a partir dos conhecimentos que adquiri no Módulo 4. Esta API é bastante básica e possui apenas três rotas GET.


Manual de Configuração e Uso da API de Livros Anti-Racismo

Introdução:
Este manual orienta o usuário sobre como configurar e utilizar a API de Livros Anti-Racismo após clonar o repositório. A API permite que os usuários acessem informações sobre livros relacionados ao tema do anti-racismo.

Pré-requisitos:
Antes de iniciar, certifique-se de que você tenha o seguinte instalado em sua máquina:

Node.js (versão 14 ou superior)
npm ou yarn (gerenciador de pacotes)

Passo a Passo:

1. Clonar o Repositório
Primeiro, clone o repositório do GitHub para sua máquina local usando o seguinte comando: git clone https://github.com/seu-usuario/seu-repositorio.git.


2. Navegar para o Diretório do Projeto:
Entre no diretório do projeto clonado: cd seu-repositorio.

3. Instalar Dependências:
Instale todas as dependências necessárias para o projeto usando npm ou yarn:  npm install.

4. Executar a API:
Agora você pode iniciar o servidor da API com o seguinte comando: npm start ou npm run dev.

5. Acessar as Rotas da API
Agora que o servidor está em execução, você pode acessar as rotas da API através de um navegador ou uma ferramenta como o Postman.

1- Mostrar todos os livros: GET http://localhost:333/api/livros

2- Buscar livro pelo ID: GET http://localhost:333/api/livros/:id 
(OBS: Você deve trocar pelo número do id do livro no lugar de /id.Exemplo: http://localhost:333/api/livros/:1)

3- Buscar livros pelo título: GET http://localhost:333/api/livros/titulo/:titulo
(OBS: Você deve troca  o nome /:titulo pelo titulo do livro.Exemplo:http://localhost:333/api/livros/titulo/:Quarto de Despejo)

4- Buscar livros pelo autor: GET http://localhost:333/api/livros/autor/:autor
(OBS: Você deve  trocar /:autor  pelo o autor do livro.Exemplo:http://localhost:333/api/livros/autor/:Silvio Almeida)

