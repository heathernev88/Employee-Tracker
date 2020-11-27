class Queries {
    constructor(connection) {
        this.connection = connection;
        this.viewAllEmployees = this.viewAllEmployees.bind(this);
        this.insertEmployee = this.insertEmployee.bind(this);

    }

    viewAllEmployees() {
        let sqlQuery = 'SELECT * FROM employee';
        this.connection.query(sqlQuery, (err, res) => {
            if (err) {
                throw err;
            }
            return res;
        })
    }

    insertEmployee(employee, callback) {
        let sqlQuery = `INSERT INTO employee(first_name, last_name, role_id, manager_id)
        VALUES('${ employee.firstName}', '${employee.lastName}', ${employee.roleId}, ${employee.managerId})`;
        this.connection.query(sqlQuery, (err, res) => {
            if (err) {
                throw err;
            }
            callback();
        });

    }


};

module.exports = Queries;
