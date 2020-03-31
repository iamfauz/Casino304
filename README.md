# Casino304
A Casino Database Management System. This Repo contains only the backend.


## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node)
- [PostGreSQL](node)
- [Express.js](https://expressjs.com).

## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.

#### Clone

- Clone this project to your local machine 'http://github.com/iamfauz/Casino304'

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm run dev
  ```
- Use `http://localhost:3000` as base url for endpoints for now. Will Deploy suing heroku or Zeit Now later

## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                 | 
| ------ | --------------------------------------- | ------------------------- |
|  GET   | Gets all players                        | `/players`                |
|  GET   | Login for player                        | `/players/login`          |

