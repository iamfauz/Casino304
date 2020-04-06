
var connection = require('../dbConnection')

/**
 * Here you will define all Player related functions that interact with the the remote DB
 * The controller is used by the routes defined in the routes folder
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

    // Login for players 
      static async loginByPlayer(req, res) {
        const email = req.body.email
        console.log("email: "  + email)
        const password = req.body.password
        console.log("password: "  + password)
        const query = 'SELECT * FROM players WHERE email = :email AND password = :password;'
        connection.query(query, { type: connection.QueryTypes.SELECT,
            replacements: {
                email: email,
                password: password
              } })
            .then(players => {
                console.log([players])
                if(players.length != 0){
                    res.json(players[0])
                } else {
                    res.status(404).json({message: "Email or Password wrong"})
                }
            })
    }

    static async deletePlayerById(req) {
        const id = req.body.id
        const query = 'DELETE FROM players WHERE ID = :id;'
        connection.query(query, { type: connection.QueryTypes.DELETE,
            replacements: {
                id: id
            } })
    }
}

export default PlayerController;