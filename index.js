// Code your solutions in this file
const employees = ['Ada', 'Brendan', 'Ali'];

function printBadges(employee) {
  for (let i = 0, i < employees.length, i++) {
    console.log(`Welcome ${employees.[i]}! You are employee #i.`);
  }
  return employees;
}
