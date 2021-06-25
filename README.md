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

O Valoriza é uma aplicação que consiste em criação de usuários e elogios por meio de tags e comentários. Nele, fazemos (i) o cadastro de usuário, com atualização de fotos, config de perfil de admin, (ii) criação de tags (disponível apenas para admins da api) que serão utilizadas ao elogiar um outro usuário (por exemplo, pela sua proatividade, sua capacidade de ajudar, ...).
O elogio é cadastrado ao realizar um comentário destinado a um usuário específico e vinculando a tag relacionada.

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
- [x] Editar usuário
- [x] Aplicar conceitos SOLID e DDD

## Regras

- Cadastro de usuário

  - [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail
  - [x] Não é permitido cadastrar usuário sem e-mail
  - [x] Não é permitido lista usuários que não sejam administradores

- Cadastro de TAG

  - [x] Não é permitido cadastrar tag sem nome
  - [x] Não é permitido cadastrar mais de uma tag com o mesmo nome
  - [x] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  - [x] Não é permitido um usuário cadastrar um elogio para si
  - [x] Não é permitido cadastrar elogios para usuários inválidos
  - [x] O usuário precisa estar autenticado na aplicação

## Diagrama

![Users](https://user-images.githubusercontent.com/30372910/123325652-a89c3500-d50e-11eb-81d9-e40e3da1b92b.png)

## 🚀 Como executar

- Clone o projeto utilizando o comando `git clone https://github.com/WesleyIsr4/nlwValoriza`
- Instale as dependencias do projeto com o comando `yarn install ou npm install`
- Configure o `ormconfig.json` para o seu banco de dados
- Execute o comando `yarn ou npm` + `typeorm migrations:run` para a criação das tabelas
- Execute o servidor com o comando `yarn dev:server ou npm dev:server`

A aplicação pode ser acessada em [`localhost:3333`](http://localhost:3333).
