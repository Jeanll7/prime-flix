# Projeto React com React Router e Axios

Este projeto React é uma aplicação simples que utiliza as bibliotecas `react-router-dom` para facilitar a navegação entre páginas e `axios` para realizar chamadas à API do The Movie Database (TMDb).

## Estrutura do Projeto

- **`src/components/Header.js`:** Componente de cabeçalho que pode ser incluído em todas as páginas.
- **`src/pages/Home.js`:** Página principal que exibe uma lista dos filmes atualmente em exibição.
- **`src/pages/Filme.js`:** Página que exibe detalhes específicos de um filme com base no ID fornecido na URL.
- **`src/services/api.js`:** Configuração do Axios para realizar chamadas à API do TMDb.

## Configuração do Projeto

### Instalação de Dependências

Certifique-se de ter o Node.js instalado em seu ambiente. Em seguida, execute o seguinte comando no terminal:

```bash
npm install
```

### Execução do Projeto

Após a instalação das dependências, inicie o projeto com o seguinte comando:

```bash
npm start
```

O aplicativo será iniciado e estará disponível em [http://localhost:3000](http://localhost:3000).

Como Funciona
A página inicial (Home.js) faz uma chamada à API do TMDb para obter uma lista dos filmes atualmente em exibição.
Cada filme é exibido como um artigo com um título, uma imagem do pôster e um link para acessar mais detalhes na página do filme (Filme.js).
A navegação entre as páginas é gerenciada pela biblioteca react-router-dom.
Contribuições e Melhorias
Sinta-se à vontade para contribuir, abrir problemas ou propor melhorias para este projeto. Estamos aqui para aprender e evoluir juntos!

### MIT

Licença
Este projeto está licenciado sob a [Licença MIT](LICENSE).
