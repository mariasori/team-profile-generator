// imports from Engineer.js
const Engineer = require('../lib/Engineer');

// tests creation of Engineer object
test('creates a Engineer object', () => {
    const engineer = new Engineer('Maria', 87, 'mariasori87@gmail.com', 'mariasori');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

// test role
test('gets role of employee', () => {
    const engineer = new Engineer('Maria', 87, 'mariasori87@gmail.com', 'mariasori');

    expect(engineer.getRole()).toEqual('Engineer');
});