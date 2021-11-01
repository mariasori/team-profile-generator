// Manager card HTML
const managerHTML = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4><span class="oi" data-glyph="briefcase"></span> Manager</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>    
    `
}

// Engineer card HTML
const engineerHTML = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4><span class="oi" data-glyph="monitor"></span> Engineer</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub: ${engineer.github}</p>
            </div>
        </div>
    </div>    
    `
}

// Intern card HTML
const internHTML = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4><span class="oi" data-glyph="pencil"></span> Intern</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="github">School: ${intern.school}</p>
            </div>
        </div>
    </div>    
    `
}

// join all cards for HTML body
function generateHTML(data) {
    
    //create array for all cards
    cardArray = [];

    for (let i=0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = managerHTML(employee);

            cardArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = engineerHTML(employee);

            cardArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = internHTML(employee);

            cardArray.push(internCard);
        }
    }

    // join all cards HTML
    const employeeCards = cardArray.join('')

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

// generate HTML page
const generateTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>
    
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
                <div class="container">
                    <div class="row justify-content-center" id="team-cards">
                        ${employeeCards}
                    </div>
                </div>
            </main>
        </body>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
    `
}


//export
module.exports = generateHTML;