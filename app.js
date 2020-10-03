// Require different files and packages

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Empty array that will be eventually pushed into render file
var employees = [];


// Function to start asking inquirer questions
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
            console.log(newManager.getOfficeNumber())
        })
        .then(function () {
            anotherEmployee();
        })
}

// Call the function to start the inquirer questions
askManager()

// Function to assess if another employee will be added
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
                console.log("Response recorded!");
                // Call the function that generates the HTML page
                startRender(employees);

            }
        })
}

// The function that generates the HTML page using htmlrenderer.js
function startRender(employees){
    var htmlpage = render(employees);
    fs.writeFile(outputPath, htmlpage, function(err){
        if (err){
            return console.log(err)
        }
        console.log("File generated.")
    })
}

// Inquirer questions for adding an engineer
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

// Inquirer questions for adding an intern
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