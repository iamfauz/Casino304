var connection = require('../dbConnection')

/**
 * Here you will define all GamePlay related functions that interact with the the remote DB
 */

class GamePlayController {

    // Get All gameplays from DB
    static async getAllGamePlays(req, res) {
        const query = 'SELECT * FROM gameplay;'
        connection.query(query, { type: connection.QueryTypes.SELECT })
            .then(games => {
                console.log(games)
                res.json(games)
            })
    }

    // Get all games by player id
    static async getAllGamesByPlayer(req, res) {
        const playerID = req.query.player_id
        const query = 'SELECT game_date, gameid, playerid, startingstack, endingstack, endingstack - startingstack AS Profit FROM game g, gameplay p  WHERE g.id = p.gameid AND playerid = :playerID;'
        connection.query(query,
            {
                type: connection.QueryTypes.SELECT,
                replacements: {
                    playerID: playerID
                }
            })
            .then(games => {
                console.log(games)
                res.json(games)

            })
    }

    // Count all games played a player
    static async countGamesByPlayer(req, res) {
        const playerID = req.query.player_id
        const query = 'SELECT COUNT(*) AS GamesPlayed FROM game g, gameplay p  WHERE g.id = p.gameid AND playerid = :playerID;'
        connection.query(query,
            {
                type: connection.QueryTypes.SELECT,
                replacements: {
                    playerID: playerID
                }
            })
            .then(rows => {
                console.log(rows[0])
                res.json(rows[0])
            })
    }

    // Get players that played in all games
    static async getPlayersInAllGames(req, res) {
        const query = 'SELECT P.id, P.Name FROM players P WHERE NOT EXISTS ((SELECT G.ID FROM game G) EXCEPT (SELECT GP.gameid FROM gameplay GP WHERE GP.playerid = P.id));'
        connection.query(query, { type: connection.QueryTypes.SELECT })
            .then(names => {
                console.log(names)
                res.json(names)
            })
    }

    // End Game
    static async endGame(req, res) {
        const endTime = req.body.endTime
        const gameId = req.body.gameId
        const query = 'UPDATE GAME SET endtime = :endTime WHERE id = :gameId;'
        connection.query(query, {
            type: connection.QueryTypes.UPDATE,
            replacements: {
                endTime: endTime,
                gameId: gameId
            }
        })
            .then(rows => {
                console.log(rows)
                res.json(rows)
            })
    }

}

export default GamePlayController;