# Rocketseat Omnistack 10

O DevRadar é um projeto que visa conectar desenvolvedores próximos a você que trabalham com as mesmas tecnologias.

Projeto desenvolvido com o backend em Nodejs com framework express, frontend em React, mobile em React Native, com a utilização de socket.io para a comunicação em tempo real.

## Requerimentos

- [Nodejs](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Expo](https://expo.io/)

## Instalação

**Backend**

Configurar a conexão do banco de dados mongodb em `backend/src/index.js`.

```bash
cd backend/
yarn install
yarn dev
```

**Frontend**

Configurar a conexão com o backend em `web/src/services/api.js`

```bash
cd frontend/
yarn install
yarn start
```

**Mobile**

Configurar a conexão com o backend em `mobile/src/services/api.js` e `mobile/src/services/socket.js`.

```bash
cd mobile/
yarn install
yarn start
```
