const arr = [1,2,3];
const [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

//Ignore element
const [x,,z] = [10,20,30];
console.log(x); // 10
console.log(z); // 30

// Object destructuring
const person = { name: "Alice", age: 30 };
const { name, age } = person;
console.log(name); // Alice

// Rename Properties
const { name: fullName } = person;
console.log(fullName); // Alice

