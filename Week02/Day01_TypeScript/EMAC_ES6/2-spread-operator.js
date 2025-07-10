// With Array
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // Spread operator to copy and add elements
console.log(arr2); // [1, 2, 3, 4]

// With Object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // Spread operator to copy and add properties
console.log(obj2); // { a: 1, b: 2, c: 3 }

// With Function Parameters
function sum(a,b,c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers); // Spread operator to pass array elements as function arguments
console.log(result); // 6