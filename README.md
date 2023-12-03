# Mini Blog em React com TypeScript e Firebase

Bem-vindo ao Mini Blog, um projeto criado com React, TypeScript e Firebase. Este mini blog oferece funcionalidades básicas de login e logout, permitindo aos usuários criar, visualizar e interagir com posts.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos à linguagem.
- **Firebase**: Plataforma de desenvolvimento de aplicativos da Google que oferece serviços em nuvem.
- **Vite**: Build tool rápido e minimalista para projetos web modernos.
- **React Router Dom**: Roteamento para aplicativos React.
- **Context API**: API do React para gerenciamento de estado global.
- **Hooks**: API do React para adicionar funcionalidades aos componentes funcionais.

## Funcionalidades

1. **Login e Logout**: Os usuários podem fazer login e logout de suas contas.
2. **Criação de Posts**: Os usuários autenticados podem criar novos posts.
3. **Visualização de Posts**: Todos os usuários podem visualizar os posts existentes.

## Como Rodar o Projeto

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Instale as Dependências**:

   ```bash
   cd seu-repositorio
   npm install
   ```

3. **Crie um Projeto no Firebase**:

   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Copie as credenciais do seu projeto e adicione no arquivo `.env`.
   - Ative a autenticação por e-mail e senha no painel de autenticação do Firebase.

4. **Rode o Projeto**:

   ```bash
    npm run dev
   ```

## Estrutura do Projeto

A estrutura de pastas do projeto é organizada da seguinte maneira:

- **`src/components`**: Contém componentes React reutilizáveis.
- **`src/pages`**: Armazena as páginas da aplicação.
- **`src/context`**: Contém a lógica de gerenciamento de estado global.
- **`src/firebase`**: Inclui a configuração e utilitários relacionados ao Firebase.
- **`src/hooks`**: Contém hooks personalizados.
