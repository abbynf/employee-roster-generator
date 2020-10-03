// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require("./Employee.js");

class Intern extends employee.Employee {
    constructor(name, email, id, school){
        super(name, email, id);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "intern"
    }
}

module.exports = {
    Intern : Intern
}