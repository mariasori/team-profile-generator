// import from Employee constructor
const Employee = require('../lib/Employee');

// Engineer constructor extending Employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github;
    }

    // override role to engineer
    getRole() {
        return 'Engineer';
    }
}

//exports
module.exports = Engineer;