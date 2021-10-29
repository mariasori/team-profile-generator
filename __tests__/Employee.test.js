// imports from Employee.js
const Employee = require('../lib/Employee');

// tests creation of employee object
test('creates an employee object', () => {
    const employee = new Employee('Maria', 87, 'mariasori87@gmail.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// test employee name
test('gets employee name', () => {
    const employee = new Employee('Maria', 87, 'mariasori87@gmail.com')

    expect(employee.getName()).toEqual(expect.any(String));
});

// test employee id
test('gets employee id', () => {
    const employee = new Employee('Maria', 87, 'mariasori87@gmail.com')

    expect(employee.getId()).toEqual(expect.any(Number));
});

// test employee email
test('gets employee email', () => {
    const employee = new Employee('Maria', 87, 'mariasori87@gmail.com')

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// test employee role
test('gets employee role', () => {
    const employee = new Employee('Maria', 87, 'mariasori87@gmail.com')

    expect(employee.getRole()).toEqual(expect.any(String));
});
