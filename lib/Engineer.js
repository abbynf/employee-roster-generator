const Employee = require("./Employee.js");
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const employee = require("./Employee.js");

class Engineer extends employee.Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email)
        this.gitHub = gitHub;
    }
    getGithub(){
        return this.gitHub
    }
    getRole(){
        return "engineer"
    }
}

module.exports = {
    Engineer : Engineer
}