// import from Employee constructor
const Employee = require('../lib/Employee');

// Manager constructor extending Employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    // override role to manager
    getRole() {
        return 'Manager';
    }
}

//exports
module.exports = Manager;