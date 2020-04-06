import e from 'express';

var connection = require('../dbConnection')

/**
 * Here you will define all Game related functions that interact with the the remote DB
 * The controller are tused by the routes defined in the routes folder
 */
class GameController {

    // Get All players from DB
    static async getAllGames(req, res) {
        const date = req.query.game_date

        var query;
        var replacements = {};
        if (date === undefined || date === '') {
            query = 'SELECT * FROM game;'
        } else {
            query = 'SELECT * FROM game where game_date = :date;'
            replacements = {
                date: date
            }
        }

        connection.query(query,
            {
                type: connection.QueryTypes.SELECT,
                replacements: replacements
            })
            .then(games => {
                console.log(games)
                res.json(games)
            })
    }

    // Get specific game by id
    static async getGameByID(req, res) {
        const id = req.params.id
        const query = 'SELECT * FROM game where id = :id;'
        connection.query(query,
            {
                type: connection.QueryTypes.SELECT,
                replacements: {
                    id: id
                }
            })
            .then(games => {
                console.log(games)
                if (games.length != 0) {
                    res.json(games[0])
                } else {
                    res.status(404).json({ message: "No game found with given ID" })
                }
            })
    }

    // Get total rake for each date
    static async getTotalRakeByDate(req, res) {
        const query = 'SELECT game_date, SUM(rakeamount) AS TotalRake FROM game GROUP BY game_date;'
        connection.query(query, { type: connection.QueryTypes.SELECT })
            .then(rows => {
                console.log(rows)
                res.json(rows)
            })
    }


    // Add game
    static async createGame(req, res) {
        const startDate = req.body.startDate
        const startTime = req.body.startTime
        const numPlayers = req.body.numPlayers
        const branchId = req.body.branchId
        const tableNo = req.body.tableNo
        const employeeId = req.body.employeeId
        const tip = req.body.tip
        const query = 'INSERT INTO Game(game_date, StartTime, NoOfPlayers, BranchID, table_no, EmployeeID, Tip) VALUES (:startDate, :startTime, :numPlayers, :branchId, :tableNo, :employeeId, :tip);'
        connection.query(query, {
            type: connection.QueryTypes.INSERT,
            replacements: {
                startDate: startDate,
                startTime: startTime,
                numPlayers: numPlayers,
                branchId: branchId,
                tableNo: tableNo,
                employeeId: employeeId,
                tip: tip,
            }
        })
            .then(rows => {
                console.log(rows)
                res.json(rows)
            })
    }

}



export default GameController;