// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require("./Employee.js");

class Manager extends employee.Employee {
    constructor(name, email, id, officeNumber){
        super(name, email, id);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "manager"
    }
}

module.exports = {
    Manager : Manager
}