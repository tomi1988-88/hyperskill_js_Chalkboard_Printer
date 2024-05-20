// Welcome to the Chalkboard Printer!
const input = require('sync-input');

let name = input("Enter name: ");
let surname = input("Enter surname: ");
let message = input("Enter message: ")
let repeats = input("Enter number of repeats: ")

for (i = 1; i <= repeats; i++) {
  console.log(`This is ${name} ${surname} and ${message}`);
}
