export class Assignment {
    constructor(id = '', grade = 0, percent = 0) {
        this.id = id;
        this.grade = Number(grade);
        this.percent = Number(percent);
    }
    getGrade() {
        return this.grade;
    }
    getPercent() {
        return this.percent;
    }
    setPercent(percent) {
        this.percent = Number(percent);
    }
}