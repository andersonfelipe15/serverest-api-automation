# Serverest Cypress API Tests

Este projeto contém testes automatizados para a API Serverest (https://serverest.dev/) usando o Cypress.

O objetivo é validar os principais endpoints da aplicação, como cadastro de usuários, login, cadastro de produtos e carrinhos.

---

## 📦 Instalação

1. Clone o repositório:

git clone https://github.com/andersonfelipe15/serverest-api-automation.git

2. Acesse a pasta do projeto:

cd serverest-cypress-api-tests

3. INSTALE AS DEPENDENCIAS:

npm init -y

4. E DEPOIS RODE:

npm install cypress --save-dev

🚀 Como rodar os testes
Após instalar as dependências:

Para abrir o Cypress em modo interativo:

npx cypress open
- Para rodar todos os testes no terminal (modo headless):

npx cypress run

# Organização do Projeto

```bash
serverest-cypress-api-tests/
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   ├── produtos_api_test.cy.js
│   │   │   ├── usuarios_api_test.cy.js
│   │   │   ├── carrinhos_api_test.cy.js
│   │   │   └── login_api_test.cy.js
│   ├── support/
│   │   ├── e2e.js
│   │   └── commands.js
├── cypress.config.js
├── package.json
└── README.md


- cypress/e2e/api/: contém todos os testes da API separados por funcionalidade.

- cypress/support/e2e.js: arquivo de suporte padrão do Cypress.

- cypress.config.js: configurações globais do Cypress.

- package.json: dependências e scripts do projeto.

📋 Testes Implementados
Produtos API
Criar produto com token de administrador

Editar produto

Listar produtos

Deletar produto

Usuários API
Criar novo usuário

Impedir criação de usuário com email duplicado

Listar todos os usuários

Carrinhos API
Criar carrinho

Listar carrinhos

Login API
Realizar login com sucesso

Login com senha inválida

Login com email inexistente

🌐 Base URL
Todos os testes usam a base URL:
https://serverest.dev/

🛠 Tecnologias utilizadas
Node.js

Cypress

Serverest API

📌 Requisitos para rodar o projeto
Node.js versão 14+ instalado

npm instalado

Acesso à internet para se comunicar com a API pública do Serverest


📜 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.


---

# ✅ Padrão de Qualidade:

- Estrutura limpa
- Scripts diretos
- Padronização Cypress
- Boa documentação

---


✍️ Autor
Anderson Brito

