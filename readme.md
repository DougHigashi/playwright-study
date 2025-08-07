# Suíte de Testes Playwright - Funcionalidade de Login 2025

## Suíte de Testes para Funcionalidade de Login
Este projeto utiliza o Playwright para realizar uma série de testes no site da [Swag Labs](https://www.saucedemo.com/v1/). Os casos de teste cobrem o login bem-sucedido e o login sem sucesso com senha incorreta.

## Instalação
Clone o projeto com:
```
git clone https://github.com/seu-usuario/testes-login-playwright.git
```

## Executando os Testes
Para executar os testes, certifique-se de ter o Node.js instalado e, em seguida, execute os seguintes comandos na pasta raiz do projeto:

```
npm install
npx run test
```

Os testes serão executados na página de login do site [https://www.saucedemo.com/v1/](https://www.saucedemo.com/v1/).

### Casos de Teste Cobertos
- **Login Bem-Sucedido**: Verifica se um usuário consegue fazer login com credenciais válidas.
- **Login Sem Sucesso (Senha Incorreta)**: Verifica se uma mensagem de erro é exibida ao tentar fazer login com uma senha incorreta.

### Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)

### Referências
- [Documentação do Playwright](https://playwright.dev/docs/intro)
- [Primeiros Passos com Playwright](https://playwright.dev/docs/getting-started)