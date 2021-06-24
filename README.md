<h1 align="center">Valoriza</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-diagrama">Diagrama</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

 <img src="https://img.shields.io/static/v1?label=NLW&message=05&color=8257E5&labelColor=000000" alt="NLW 05" />
</p>

## 💻 Projeto

O valoriza é uma aplicação que consiste em criação de usuários, tags e elogios. Nele fazemos o cadastro de usuário, com atualização de fotos, sistema de admin.
criação de tags no qual serão elogios criado para elogiar um outro usuário pela sua proatividade, sua capacidade de ajudar e etc... e as tags só pode ser criadas
por administradores da api.

E o cadastro de elogios que um outro usuário vai esta recebendo, com uma tag e uma message feito pelo usuário.

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [JWT](https://jwt.io/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [Tsyringer](https://github.com/microsoft/tsyringe)
- [Class-Transform](https://github.com/typestack/class-transformer) 

## 🔶 O que foi feito ate agora

- [x] Criação de usuário
- [x] Criação de tags
- [x] Criação de elogios
- [x] Adicionar foto ao usuário
- [x] Autenticação JWT
- [x] Limite de requisião a api
- [x] Injeção de dependencia
- [] Editar usuário
- [] Recuperar senha

## 🚀 Como executar

- Clone o projeto utilizando o comando `git clone https://github.com/WesleyIsr4/nlwValoriza`
- Instale as dependencias do projeto com o comando `yarn install ou npm install`
- Configure o ormconfig.json para o seu banco de dados
- Execute o servidor com o comando `yarn dev:server ou npm dev:server`


A aplicação pode ser acessada em [`localhost:3333`](http://localhost:3333).
