import Student from "./Student";

class GoodStudent extends Student {
    grade: string;

    constructor(id: number, name: string, age: number, grade: string) {
        super(id, name, age);
        this.grade = grade;
    }

    get getGrade() {
        return this.grade;
    }

    set setGrade(grade: string) {
        this.grade = grade;
    }
}

export default GoodStudent;