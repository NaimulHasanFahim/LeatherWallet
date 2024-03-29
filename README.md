<h1 align="center">
Online payment System For Web Project
</h1>
<p align="center">
MongoDB, Expressjs, React, Redux, Nodejs
</p>

<p align="center">
   <a href="https://travis-ci.com/amazingandyyy/mern">
      <img src="https://travis-ci.com/amazingandyyy/mern.svg?branch=master" />
   </a>
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/mern">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download
```terminal
$ git clone https://github.com/NaimulHasanFahim/bankproject.git
$ npm i
```

## project structure
```terminal
client/
   package.json
server/
   package.json
   .env (need to create your own .env for run this project see below for instructions)
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

Note that you need client and server runs concurrently in different terminal session, in order to make them talk to each other. This project is totally modular so you can run the client or server side code after extracting the downloaded folder.

## Client-side usage(PORT: 3001)
```terminal
$ cd client   // go to client folder
$ npm i       // npm install packages
$ npm start // run it locally

```

## Server-side usage(PORT: 5000)

### Prepare your secret
```
(You need to add .env File to run the Server side API code)
.env File Structure
NODE_ENV = development
PORT = 8000
CONNECTION_URL = Your Mongodb Connection Url
```

### Start

``` terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm start // run it locally
```


# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^0.27.2 | bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18|body-parser: ^1.15.2
react: ^18.2.0 | dotenv: ^16.0.1
react-dom: ^18.2.0 | express: ^4.18.1
react-redux: ^8.0.2 | jwt-simple: ^0.5.1
react-router-dom: ^6.3.0 | mongoose: ^6.3.5
redux: ^4.4.0 | jsonwebtoken : ^8.5.1
redux-thunk: ^2.1.0 | crypto-js : ^4.1.1
redux-persist : ^6.0.0| nodemon : ^2.0.16
styled-components : ^5.3.5 | cors: ^2.8.5


# Screenshots of this project

Landing Page of the website
![Landing page](https://user-images.githubusercontent.com/40023605/187589893-1c6fb88d-b30b-49f4-9180-56f74309102b.png)

User can sign in or sign up
![User can sign in or sign up](https://user-images.githubusercontent.com/40023605/187589880-44a4ae0f-09bd-4108-b553-03d8b5c137f0.png)

After signing in user can go to account route and can see his/her account details and Transactions
![After signing in user can go to account route and can see his/her account details and Transactions](https://user-images.githubusercontent.com/40023605/187589887-f63f700f-8808-4f36-965b-f95958f09e9d.png)


## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments
[Create new Issues](https://github.com/NaimulHasanFahim/webproject/issues) (preferred)

Email Me: mohammadfahimshah@gmail.com


### License
[MIT](https://github.com/amazingandyyy/mern/blob/master/LICENSE)