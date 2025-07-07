var sayStuff = {
    sayHi: function (name) {
        return "Hello, ".concat(name, "!");
    },
    sayGoodbye: function (name) {
        return "Goodbye, ".concat(name, "!");
    },
};
console.log(sayStuff.sayHi("Alice"));
console.log(sayStuff.sayGoodbye("Bob"));
