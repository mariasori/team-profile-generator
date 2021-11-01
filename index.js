const generateHTML = require('./src/generateHTML')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const teamArray = []

const addTeamMember = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: `What role does this team member have?`,
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: `What is the team member's name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log('Please enter a name for the team member');
                    return false;
                }
            }
        },
        {   
            type: 'input',
            name: 'id',
            message: `What is the team member's ID number?`,
            validate: idInput => {
                if (idInput) {
                    return true;
                }   else {
                    console.log('Please enter an ID number for the team member');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the team member's e-mail address?`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }   else {
                    console.log('Please enter an e-mail address for the team member');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the manager's office number?`,
            when: (input) => input.role === 'Manager',
            validate: numberInput => {
                if (numberInput) {
                    return true
                }   else {
                    console.log(`Please enter the manager's office number`)
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: `What is the engineer's github username?`,
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true
                }   else {
                    console.log(`Please enter the engineer's github username`)
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: `What school in the intern attending?`,
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true
                }   else {
                    console.log(`Please enter the intern's school`)
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(teamData => {
        if (teamData.role === 'Manager') {
            const { name, id, email, officeNumber } = teamData;
            const manager = new Manager (name, id, email, officeNumber);

            teamArray.push(manager);
        } else if (teamData.role === 'Engineer') {
            const { name, id, email, github } = teamData;
            const engineer = new Engineer (name, id, email, github);

            teamArray.push(engineer);
        } else {
            const { name, id, email, school } = teamData;
            const intern = new Intern (name, id, email, school)

            teamArray.push(intern);
        }
        if (teamData.confirmAddEmployee) {
            return addTeamMember(teamArray);
        } else {
            return teamArray;
        }
    })
}

const writeToFile = pageHTML => {
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) {
            console.log(err);
            return
        } else { 
            console.log('Your HTML file has been created!') 
        }
    })
}

const init = () => {
    addTeamMember()
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeToFile(pageHTML);
    });
}

init();