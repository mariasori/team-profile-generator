// imports from Intern.js
const Intern = require('../lib/Intern');

// tests creation of Intern object
test('creates a Intern object', () => {
    const intern = new Intern('Maria', 87, 'mariasori87@gmail.com', 'UCF');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

// test role
test('gets role of employee', () => {
    const intern = new Intern('Maria', 87, 'mariasori87@gmail.com', 'UCF');

    expect(intern.getRole()).toEqual('Intern');
});