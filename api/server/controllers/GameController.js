var connection = require('../dbConnection')

/**
 * Here you will define all Game related functions that interact with the the remote DB
 * The controller are tused by the routes defined in the routes folder
 */
class GameController {

    // Get All players from DB
    static async getAllGames(req, res) {
        const query = 'SELECT * FROM game;'
        connection.query(query, { type: connection.QueryTypes.SELECT })
            .then(games => {
                console.log([games])
                res.json(games)
            })
    }

      // Get specific game by id
      static async getGameByID(req, res) {
        const id = req.params.id
        const query = 'SELECT * FROM game where id = :id;'
        connection.query(query, 
            { type: connection.QueryTypes.SELECT,
              replacements: {
                    id:id
                  }
            })
            .then(games => {
                console.log([games])
                if(games.length != 0){
                    res.json(games[0])
                } else {
                    res.status(404).json({message: "No game found with given ID"})
                }
            })
    }
    
}

export default GameController;