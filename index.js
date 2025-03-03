// Write your solution in this file!
// Function to update an employee object immutably
// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return { ...employee, [key]: value }; // Creates a new object with the updated key-value pair
// }

// Example usage:
// const employee = { name: "Sam" };
// const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "role", "Manager");

// console.log(updatedEmployee); // { name: "Sam", role: "Manager" }
// console.log(employee);        // { name: "Sam" } (unchanged)

// // function updateEmployeeWithKeyAndValue(employee, key, value) {
// //     return { ...employee, [key]: value }; // Creates a new object with the updated key-value pair
// // }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value; // Directly modifies the original employee object
//     return employee;
// }

// // Example usage:
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; // Creates a new object with the updated key-value pair
}

// Function to update an employee object destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Modifies the original object
    return employee;
}

// Function to delete a key from an employee object immutably (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee }; // Creates a shallow copy
    delete newEmployee[key]; // Deletes the key in the new object
    return newEmployee;
}

// Function to delete a key from an employee object destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Modifies the original object
    return employee;
}

// Example usage:
const employee = { name: "Sam" };

// Test non-destructive update
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");
console.log(updatedEmployee); // { name: "Sam", streetAddress: "11 Broadway" }
console.log(employee); // { name: "Sam" } (unchanged)

// Test destructive update
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
console.log(employee); // { name: "Sam", streetAddress: "12 Broadway" } (modified)

// Test non-destructive delete
const employeeAfterDelete = deleteFromEmployeeByKey(employee, "name");
console.log(employeeAfterDelete); // { streetAddress: "12 Broadway" }
console.log(employee); // { name: "Sam", streetAddress: "12 Broadway" } (unchanged)

// Test destructive delete
destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(employee); // { streetAddress: "12 Broadway" } (modified)