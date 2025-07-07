// With Array: include 2,3,4 into array rest
const [first, second,...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4]

// With Object: include {name: "Alice", age: 30} into object rest
const { name, age, ...restObj } = { name: "Alice", age: 30, city: "HCM", country: "Vietnam" };
console.log(name); // Alice
console.log(age); // 30
console.log(restObj); // { city: 'HCM', country: 'Vietnam' }

// With Function: include ,1,2,3 into function rest
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
