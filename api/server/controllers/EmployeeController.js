var connection = require('../dbConnection')

/**
 * Here you will define all Employee related functions that interact with the the remote DB
 * The controller is used by the routes defined in the routes folder
 */
class EmployeeController {

    // create new employee
    static async addEmployee(req, res) {
        const name = req.body.name
        const email = req.body.email
        const phoneNo = req.body.PhoneNo
        const password = req.body.password
        const branchID = req.body.BranchID
        const query = 'INSERT INTO Employee(Name, Email, PhoneNo, Password, BranchID) VALUES (:name, :email, :phoneNo, :password, :branchID);'
        connection.query(query, { type: connection.QueryTypes.INSERT,
            replacements: {
                name: name,
                email: email,
                phoneNo: phoneNo,
                password: password,
                branchID: branchID,
            } })
    }

    // update existing employee given the employee's id
    static async updateEmployeeById(req, res) {
        const id = req.body.id
        const name = req.body.name
        const email = req.body.email
        const phoneNo = req.body.PhoneNo
        const password = req.body.password
        const branchID = req.body.BranchID
        if (name !== undefined && name !== '') {
            const query ' "UPDATE Employee SET Name = :name WHERE ID = :id;'
            connection.query(query, { type: connection.QueryTypes.UPDATE,
                replacements: {
                    id: id,
                    name: name,
                } })
        }
        if (email !== undefined && email !== '') {
            const query ' "UPDATE Employee SET Email = :email WHERE ID = :id;'
            connection.query(query, { type: connection.QueryTypes.UPDATE,
                replacements: {
                    id: id,
                    email: email,
                } })
        }
        if (phoneNo !== undefined && phoneNo !== '') {
            const query ' "UPDATE Employee SET PhoneNo = :phoneNo WHERE ID = :id;'
            connection.query(query, { type: connection.QueryTypes.UPDATE,
                replacements: {
                    id: id,
                    phoneNo: phoneNo,
                } })
        }
        if (password !== undefined && password !== '') {
            const query ' "UPDATE Employee SET Password = :password WHERE ID = :id;'
            connection.query(query, { type: connection.QueryTypes.UPDATE,
                replacements: {
                    id: id,
                    password: password,
                } })
        }
        if (branchID !== undefined && branchID !== '') {
            const query ' "UPDATE Employee SET BranchID = :branchID WHERE ID = :id;'
            connection.query(query, { type: connection.QueryTypes.UPDATE,
                replacements: {
                    id: id,
                    branchID: branchID,
                } })
        }
    }

}


export default EmployeeController;