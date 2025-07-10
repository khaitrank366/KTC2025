interface Speech {
  sayHi(name: string): string;
  sayGoodbye: (name: string) => string;
}

let sayStuff: Speech = {
  sayHi: function (name: string) {
    return `Hello, ${name}!`;
  },
  sayGoodbye: (name: string): string => {
    return `Goodbye, ${name}!`;
  },
};

console.log(sayStuff.sayHi("Alice"));
console.log(sayStuff.sayGoodbye("Bob"));
