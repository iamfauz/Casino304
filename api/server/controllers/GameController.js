var connection = require('../dbConnection')

/**
 * Here you will define all Game related functions that interact with the the remote DB
 * The controller is used by the routes defined in the routes folder
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

   // Get players that played in all games
   static async getPlayersInAllGames(req, res) {
        const query = 'SELECT P.Name FROM players P WHERE NOT EXISTS (SELECT G.ID FROM game G) EXCEPT (SELECT GP.gameid FROM gameplay GP WHERE GP.playerid = P.id);'
        connection.query(query, { type: connection.QueryTypes.SELECT})
            .then(names => {
                console.log(names)
                if (names.length != 0) {
                    res.json(names[0])
                } else {
                    res.status(404).json({ message: "No players found that participated in all games" })
                }
            })
   }

}

export default GameController;