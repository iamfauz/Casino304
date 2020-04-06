# Casino304
A Casino Database Management System. This Repo contains only the backend.
Front-End Repo - https://github.com/iamfauz/Casino304-App

#### NOTE TO INSTRUCTORS
There is file called`initDBSql.sql` that contains the sql script that creates all the tables and adds dummy data to it. Check it out for marking.

All SQL queries used can be found in the controller files. Go to api/server/controller/. You'll find all the neccesary SQL queries used to interact with our remote db.

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
|  DELETE| Delete player by id                     | `/players/:id`                           |            
|  GET   | Get All games                           | `/games`                                 |
|  POST  | Create Game                             | `/games`                                 |
|  GET   | Get a game by id                        | `/game/:id`                              |
|  GET   | Get all games filtered by date          | `/games?game_date='date'`                |
|  GET   | Get all gameplays filtered by date      | `/gameplays`                             |
|  GET   | Get gameplays info of a player          | `/gameplays/player?player_id=id`         |
|  GET   | Get players who have played all games   | `/gameplays/leaderBoards                 |
|  GET   | Count a players games                   | `/gameplays/count`                       |
|  PATCH | End Game by entering endTime            | `/gameplays/endGame`                     |
|  GET   | Count all games played by a player      | `/aggregate/total_games?player_id=id`    |
|  GET   | Total rake for each date                | `/aggregate/total_rake_by_date`          |
|  GET   | Get all the tables types for each branch| `/branches`                              |
|  GET   | Get the names of all of the branches    | `/branches/branchnames`                  |
|  PATCH | Update Employee data                    | `/employees/:id`                         |

                                                     


