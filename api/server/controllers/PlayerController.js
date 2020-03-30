
var connection = require('../dbConnection')

/**
 * Here you will define all Player related functions that interact with the the remote DB
 * The controller are tused by the routes defined in the routes folder
 */
class PlayerController {

    // Get All players from DB
    static async getAllPlayers(req, res) {
        const query = 'SELECT * FROM players;'
        connection.query(query, { type: connection.QueryTypes.SELECT })
            .then(players => {
                console.log([players])
                res.json(players)
            })
    }
}

export default PlayerController;