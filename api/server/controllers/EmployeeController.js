var connection = require('../dbConnection')

/**
 * Here you will define all Employee related functions that interact with the the remote DB
 * The controller is used by the routes defined in the routes folder
 */
class EmployeeController {

    // update existing employee given the employee's id
    static async updateEmployeeById(req, res) {
        const id = req.body.id
        const name = req.body.name
        const email = req.body.email
        const phoneNo = req.body.PhoneNo
        const password = req.body.password
        const branchID = req.body.BranchID
        if (name !== undefined && name !== '') {
            const query = 'UPDATE Employee SET Name = :name WHERE ID = :id;'
            connection.query(query, { type: connection.QueryTypes.UPDATE,
                replacements: {
                    id: id,
                    name: name,
                } })
                .then(rows => {
                    console.log(rows)
                    res.json(rows)
                })
        }
        if (email !== undefined && email !== '') {
            const query = 'UPDATE Employee SET Email = :email WHERE ID = :id;'
            connection.query(query, { type: connection.QueryTypes.UPDATE,
                replacements: {
                    id: id,
                    email: email,
                } })
                .then(rows => {
                    console.log(rows)
                    res.json(rows)
                })

        }
        if (phoneNo !== undefined && phoneNo !== '') {
            const query = 'UPDATE Employee SET PhoneNo = :phoneNo WHERE ID = :id;'
            connection.query(query, { type: connection.QueryTypes.UPDATE,
                replacements: {
                    id: id,
                    phoneNo: phoneNo,
                } })
                .then(rows => {
                    console.log(rows)
                    res.json(rows)
                })
        }
        if (password !== undefined && password !== '') {
            const query = 'UPDATE Employee SET Password = :password WHERE ID = :id;'
            connection.query(query, { type: connection.QueryTypes.UPDATE,
                replacements: {
                    id: id,
                    password: password,
                } })
                .then(rows => {
                    console.log(rows)
                    res.json(rows)
                })
        }
        if (branchID !== undefined && branchID !== '') {
            const query = 'UPDATE Employee SET BranchID = :branchID WHERE ID = :id;'
            connection.query(query, { type: connection.QueryTypes.UPDATE,
                replacements: {
                    id: id,
                    branchID: branchID,
                } })
                .then(rows => {
                    console.log(rows)
                    res.json(rows)
                })
        }
    }

}


export default EmployeeController;