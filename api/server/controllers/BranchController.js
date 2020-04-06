var connection = require('../dbConnection')

/**
 * Here you will define all Branch related functions that interact with the the remote DB
 * The controller is used by the routes defined in the routes folder
 */
class BranchController {

 // get all table types at each branch
 static async getTableTypesForEachBranch(req, res) {
    const name = req.body.name
    const email = req.body.email
    const phoneNo = req.body.PhoneNo
    const password = req.body.password
    const branchID = req.body.BranchID
    const query = 'SELECT Name, table_type FROM Branch, PokerTable WHERE Branch.BranchID = PokerTable.BranchID;'
    connection.query(query, { type: connection.QueryTypes.SELECT })
        .then(branches => {
            console.log([branches])
            if(branches.length != 0){
                res.json(branches[0])
            } else {
                res.status(404).json({message: "Query Error"})
            }
        }
}

export default BranchController;