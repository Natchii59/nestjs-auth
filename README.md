<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" />
  </a>
</p>

## Description

<p>
  This API offers an account creation system as well as an authentication system thanks to the NestJS framework, with express-session.
  It also has SQL database system to store these users as well as sessions. All thanks to typeorm.
</p>

## Project structure

```
src
├─ auth
│  ├─ controllers
│  ├─ services
│  ├─ utils
│  └─ auth.module.ts
├─ typeorm
├─ users
│  ├─ controllers
│  ├─ dtos
│  ├─ exceptions
│  ├─ filters
│  ├─ services
│  ├─ types
│  └─ users.module.ts
├─ utils
├─ app.module.ts
└─ main.ts
```

## Use API

```
GET: localhost:PORT/api/users/username/:username
GET: localhost:PORT/api/users/id/:id
POST: localhost:PORT/api/users/create

POST: localhost:PORT/api/auth/
POST: localhost:PORT/api/api/login
POST: localhost:PORT/api/auth/status
```

## Import repository

```bash
$ git clone https://github.com/Natchii59/nestjs-auth.git
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
