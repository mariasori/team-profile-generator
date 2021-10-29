// imports from Manager.js
const Manager = require('../lib/Manager');

// tests creation of Manager object
test('creates a Manager object', () => {
    const manager = new Manager('Maria', 87, 'mariasori87@gmail.com', '555-555-5555');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// test role
test('gets role of employee', () => {
    const manager = new Manager('Maria', 87, 'mariasori87@gmail.com', '555-555-5555');

    expect(manager.getRole()).toEqual('Manager');
});