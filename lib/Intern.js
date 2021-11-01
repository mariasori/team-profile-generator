// import from Employee constructor
const Employee = require('../lib/Employee');

// Intern constructor extending Employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }

    // override role to intern
    getRole() {
        return 'Intern';
    }
}

//exports
module.exports = Intern;