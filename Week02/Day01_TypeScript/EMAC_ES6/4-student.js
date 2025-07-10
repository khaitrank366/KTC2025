class Student {
    constructor(id, name, age) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`;
    }
}

export default Student;