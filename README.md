# Casino304
A Casino Database Management System. This Repo contains only the backend.

#### NOTE TO INSTRUCTORS
There is file called`initDBSql.sql` that contains the sql script that creates all the tables and adds dummy data to it. Check it out for marking.

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
- Use `http://localhost:3000` as base url for endpoints for now. Will Deploy to heroku or Zeit Now later

## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                                |  
| ------ | --------------------------------------- | ---------------------------------------- |               
|  GET   | Gets all players                        | `/players`                               |               
|  GET   | Login for player                        | `/players/login`                         |             
|  GET   | Get All games                           | `/games`                                 |
|  GET   | Get a game by id                        | `/game/:id`                              |
|  GET   | Get all games filtered by date          | `/games?game_date='date'`                |
|  GET   | Get all gameplays filtered by date      | `/gameplays`                             |
|  GET   | Get gameplays info of a player          | `/gameplays/player?player_id=id`         |
|  GET   | Count all games played by a player      | `/aggregate/total_games?player_id=id`    |
|  GET   | Total rake for each date                | `/aggregate/total_rake_by_date           |


