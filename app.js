const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

var employees = [];

function askManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the manager's name?",
                name: "managerName"
            },
            {
                type: "input",
                message: "What is the manager's ID?",
                name: "managerId"
            },
            {
                type: "input",
                message: "What is the manager's email?",
                name: "managerEmail"
            },

            {
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber"
            }
        ])
        .then(function (response) {
            const newManager = new Manager.Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber)
            employees.push(newManager)
        })
        .then(function () {
            anotherEmployee();
        })
}

askManager();

function anotherEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to add another employee?",
                choices: ["Add a new engineer", "Add a new intern", "No more to add"],
                name: "anothertype"
            }
        ])
        .then(function (response) {
            console.log(response)
            if (response.anothertype === "Add a new engineer"){
                askEngineer();
            }
            else if (response.anothertype === "Add a new intern"){
                askIntern();
            }
            else {
                console.log("Success!");
            }
        })
}

function askEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is the engineer's ID?",
                name: "engineerID"
            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is the engineer's github username?",
                name: "github"
            }
        ])
        .then(function (response) {
            const newEngineer = new Engineer.Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.github);
            employees.push(newEngineer);
        })
        .then(function () {
            anotherEmployee();
        })
}

function askIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the intern's name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is the intern's ID?",
                name: "internId"
            },
            {
                type: "input",
                message: "What is the intern's email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What is the intern's school?",
                name: "internSchool"
            }
        ])
        .then(function (response) {
            const newIntern = new Intern.Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            employees.push(newIntern);
        })
        .then(function () {
            anotherEmployee();
        })
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
