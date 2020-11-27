const inquirer = require("inquirer");
const Queries = require ("./Queries");
const connection = require("./connection");
const query = new Queries(connection);

const startInquirer = [
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["View all Employees", "Add Employee", "Update Employee", "Delete Employee", 
        "Add Department", "View Departments", "Add Role", "View Role", "View Employees by Manager"]
    }];

const employeePrompt = [
    {
        type: "input",
        message: "What is the first name of the employee",
        name: "firstName",
        default: "Peter"
    },
    {
        type: "input",
        message: "What is the last name of the employee",
        name: "lastName",
        default: "Jackson"
    },
    {
        type: "input",
        message: "What is the role ID of the employee?",
        name: "roleId",
        default: 100
        
    },
    {
        type: "input",
        message: "What is the Id of the employee's manager?",
        name: "managerId",
        default: 100
        
    }
];

const updateEmployeePrompt = [
    {
        type: "list",
        message: "Select the employee you would like to update",
        name: "employeeName",
        choice: []
    },
    {   
        type: "input",
        message: "What is the employee's new role id?",
        name: "newRole"
    }
];

const rolePrompt = [
    {
        type: "input",
        message: "What is the name/title of the role?",
        name: "role",
    },
    {
        type: "input",
        message: "What is the salary of the role?",
        name: "salary",
    },
    {
        type: "input",
        message: "What department does this role belong to?",
        name: "roleDepartment"
        
    }
];

const departmentPrompt = [
    {
        type: "input",
        message: "What is the first name of the department",
        name: "department",
    }
];

function followupQuestions (answers) {
    switch(answers.action) {
        case "Add Employee": 
             addEmployee();
            break;

        case "Delete Employee":
            deleteEmployee();
            break;

        case "Update Employee":
            updateEmployee();
            break;

        case "Add Department":
            addDepartment();
            break;

        case "View Departments":
            viewDepartments();
            break;

        case "View Employees by Manager":
            viewEmployeeByManager();
            break;

        case "View all Employees":
            console.table(viewAllEmployees());
            break;

        case "View Role":
            viewRoles();
            break;

        case "Add Role":
            addRole();
            break;
    }
   
};

function start() {
    inquirer.prompt(startInquirer).then((startAnswers) => {
        followupQuestions(startAnswers)
    })
};

async function addEmployee() {
    inquirer.prompt(employeePrompt).then((response) => {
        query.insertEmployee(response, () => {
            let employees = viewAllEmployees();
            console.table(employees);
        });
    })
    
};
      
async function deleteEmployee() {
    
};

async function updateEmployee() {
    
};

async function addDepartment() {
    
};

async function viewDepartments() {
    
};

async function viewEmployeeByManager() {
    
};

async function viewAllEmployees() {
    let employees = await query.viewAllEmployees();
    return (employees);
    
};

async function viewRoles() {
    
};

async function addRole() {
    
};

start();