import { ListOfAssignments } from "./ListOfAssignments.js";
import { ListOfStudents } from "./ListOfStudents.js";

export class Course {
    constructor(name = '', id = '', numCredits = 0) {
        this.name = name;
        this.id = id;
        this.numCredits = Number(numCredits);
        this.listOfAssignments = new ListOfAssignments();
        this.listOfStudents = new ListOfStudents();
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNumCredits() {
        return this.numCredits;
    }
    setNumCredits(numCredits) {
        this.numCredits = numCredits;
    }
    addAssignment(assignment) {
        this.listOfAssignments.list.push(assignment);
    }
    addStudent(student) {
        this.listOfStudents.list.push(student);
    }
    removeStudents = function (listMSSV) {
        for (let i = 0; i < listMSSV.length; i++) {
            for (let j = 0; j < this.listOfStudents.list.length; j++) {
                let student = this.listOfStudents.list[j];
                if (listMSSV[i] == student.mssv) {
                    this.list.splice(j, 1);
                    return;
                }
            }
        }
        return;
    }
    removeStudent = function (key) {
        for (let i = 0; i < this.listOfStudents.list.length; i++) {
            if (key == this.listOfStudents.list[i].mssv) {
                this.list.splice(i, 1);
                return;
            }
        }
        return;
    }

}