import { ListOfStudents } from "./ListOfStudents.js";

export class Class {
    constructor(id) {
        this.id = id;
        this.listOfStudent = new ListOfStudents();
    }
    addStudent(student) {
        this.listOfStudent.addStudent(student);
    }
    removeStudentByMSSV(mssv) {
        this.listOfStudent.removeStudentByMSSV(mssv);
    }
    removeStudentByStudent(student) {
        this.listOfStudent.removeStudent(student);
    }
    removeStudents(listMSSV) {
        this.listOfStudent.removeStudents(listMSSV);
    }
    searchStudentByMSSV(mssv) {
        this.listOfStudent.searchStudentByMSSV(mssv);
    }
    
}