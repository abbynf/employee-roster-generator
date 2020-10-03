// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {
        return console.log(this.name);
    }
    getId() {
        return console.log(this.id);
    }
    getEmail(){
        return console.log(this.email)
    }
    getRole(){
        return "employee"
    }
}


