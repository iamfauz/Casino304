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
                console.log(games)
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
                console.log(games)
                if(games.length != 0){
                    res.json(games[0])
                } else {
                    res.status(404).json({message: "No game found with given ID"})
                }
            })   
    }
    
     // Get specific game by id
     static async getAllGamesByDate(req, res) {
        const date = req.query.game_date
        const query = 'SELECT * FROM game where game_date = :date;'
        connection.query(query, 
            { type: connection.QueryTypes.SELECT,
              replacements: {
                    date:date
                  }
            })
            .then(games => {
                console.log(games)
                res.json(games)  
            })
    }


    // Get specific game by id
    static async getAllGamesByPlayer(req, res) {
        const playerID = req.query.player_id
        const query = 'SELECT game_date, gameid, playerid, startingstack, endingstack, endingstack - startingstack AS Profit FROM game g, gameplay p  WHERE g.id = p.gameid AND playerid = :playerID;'
        connection.query(query, 
            { type: connection.QueryTypes.SELECT,
              replacements: {
                    playerID:playerID
                  }
            })
            .then(games => {
                console.log(games)
                res.json(games)
               
            })
    }

}

export default GameController;