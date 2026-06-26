# 🔮 Loja da Bruxa — Atividade 2

Projeto desenvolvido para a disciplina de Desenvolvimento Web.
Site de vendas fictício de uma loja de elixires e poções mágicas, com Web Service, painel administrativo e interface para o cliente.

---

## 📌 Sobre o Projeto

A **Loja da Bruxa** é um e-commerce temático da bruxa Seraphina Blackthorn, fundada em 1867.
O sistema é composto por:

- **Web Service** em Node.js com Express, que gerencia os elixires via API REST
- **Banco de dados** SQLite em modo memória (os dados são reiniciados a cada execução)
- **Site do cliente** com visual místico em tons de roxo, animações de morceguinhos e gatinhos, linha do tempo histórica e listagem de produtos carregada com **React**
- **Carrinho de compras** funcional com adicionar, remover itens e calcular total
- **Painel de administração** para cadastrar e remover elixires

---

## 🛠️ Tecnologias Utilizadas

- Node.js + Express
- Sequelize + SQLite (storage em memória)
- React 18 (via CDN + Babel Standalone)
- HTML5, CSS3 (variáveis CSS, animações e glassmorphism)
- JavaScript Vanilla (painel admin)
- CORS

---

## 📁 Estrutura de Arquivos

    loja-bruxa/
    ├── server.js
    ├── package.json
    └── public/
        ├── index.html
        ├── admin.html
        └── styles/
            ├── main.css
            ├── animations.css
            └── cart.css

---

## ▶️ Como Rodar

### Pré-requisitos
- Node.js versão 18 ou superior
- npm (já vem com o Node.js)

### Passo a passo

1. Clone o repositório:

        git clone https://github.com/Cardosodev83/Atividade-2---web.git
        cd Atividade-2---web

2. Instale as dependências:

        npm install

3. Inicie o servidor:

        npm start

4. Acesse no navegador:
   - Site do cliente: http://localhost:3000
   - Painel admin: http://localhost:3000/admin

> ⚠️ O banco de dados é reiniciado toda vez que o servidor é iniciado, mas os 6 elixires iniciais são inseridos automaticamente.

---

## 🔌 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/elixirs | Lista todos os elixires |
| POST | /api/elixirs | Cadastra um novo elixir |
| DELETE | /api/elixirs/:id | Remove um elixir pelo ID |

Exemplo de body para POST:

    {
      "titulo": "Elixir da Coragem",
      "descricao": "Infunde bravura em quem o bebe.",
      "imagem": "https://exemplo.com/imagem.jpg",
      "valor": 250
    }

---

## 🧪 Elixires Iniciais

| Elixir | Valor |
|--------|-------|
| Elixir Blue Sky | 300 moedas |
| Elixir do Perfume Misterioso | 200 moedas |
| Elixir de Pinus | 3000 moedas |
| Elixir da Beleza Eterna | 100 moedas |
| Elixir do Arco-Íris | 120 moedas |
| Caldeirão das Verdades Secretas | 150 moedas |

---

## ✨ Funcionalidades

- [x] Listagem de elixires via React + fetch (AJAX)
- [x] Carrinho de compras com quantidade, subtotal e total
- [x] Botão "Finalizar Compra"
- [x] Cadastro de novos elixires (painel admin)
- [x] Remoção de elixires (painel admin)
- [x] Animações de morceguinhos e gatinhos voando pela tela
- [x] Linha do tempo histórica da loja
- [x] Layout responsivo (mobile, tablet e desktop)
- [x] Efeitos de glow e glassmorphism

---

*Desenvolvido por Mariana Cardoso — 2026*
