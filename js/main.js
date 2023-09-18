console.log(1);
import { Assignment } from "../models/Assignment.js";
import { ListOfAssignments } from "../models/ListOfAssignments.js";
import { Course } from "../models/Course.js";
import { ListOfCourses } from "../models/ListOfCourses.js";
import { Student } from "../models/Student.js";
import { ListOfStudents } from "../models/ListOfStudents.js"
import { Validation } from "../models/Validation.js";

let listStu = new ListOfStudents();
let validate = new Validation();

getStorage();

function DomId(id) {
    return document.getElementById(id);
}

function createTd(className, value) {
    var td = document.createElement('td');
    td.className = className;
    td.innerHTML = value;
    return td;
}

function setStorage() {
    let jsonListStu = JSON.stringify(listStu.list);
    localStorage.setItem('List of Students', jsonListStu);
}

function getStorage() {
    let jsonListStu = localStorage.getItem('List of Students');
    if (jsonListStu) {
        let listStudent = JSON.parse(jsonListStu);
        listStu.list = listStudent;
        displayList(listStu);
    }
}

function displayList(listStu) {
    let listTable = DomId('tbodySinhVien');
    listTable.innerHTML = '';
    for (let i = 0; i < listStu.list.length; i++) {
        let stu = listStu.list[i];

        let trStu = document.createElement('tr');
        trStu.id = stu.mssv;
        trStu.className = 'trStudent';

        let td = document.createElement('td');

        let tdDelete = document.createElement('i');
        tdDelete.setAttribute('value', stu.mssv);
        tdDelete.setAttribute('class', 'fa fa-trash-alt');
        tdDelete.setAttribute('id', 'removeStudentBtn');
        tdDelete.addEventListener("click", function () {
            removeStudent(stu.mssv);
        });

        let tdRepair = document.createElement('i');
        tdRepair.setAttribute('value', stu.mssv);
        tdRepair.setAttribute('class', 'fa fa-edit');
        tdRepair.addEventListener("click", function () {
            modifyInf(stu.mssv)
        });

        td.setAttribute('id', 'options');
        td.appendChild(tdRepair);
        td.appendChild(tdDelete);

        let tdHoTen = createTd('tdFullName', stu.name);
        let tdMSSV = createTd('tdMSSV', stu.mssv);
        let tdEmail = createTd('tdEmail', stu.email);
        let tdCCCD = createTd('tdCCCD', stu.cccd);
        let tdPhone = createTd('tdPhone', stu.phone);
        let tdAverage = createTd('tdAverage', stu.average);
        let tdRank = createTd('tdRank', stu.rank);

        trStu.appendChild(tdHoTen);
        trStu.appendChild(tdMSSV);
        trStu.appendChild(tdEmail);
        trStu.appendChild(tdCCCD);
        trStu.appendChild(tdPhone);
        trStu.appendChild(tdAverage);
        trStu.appendChild(tdRank);
        trStu.appendChild(td);

        listTable.appendChild(trStu);
    }
}

// Get the button element
const addStudentBtn = document.getElementById("addStudentBtn");
// Add an event listener to the button
addStudentBtn.addEventListener("click", addStudent);
function addStudent() {
    // Input
    let fullName = DomId('hoTen');
    let maSo = DomId('maSo');
    let email = DomId('email');
    let phone = DomId('phone');
    let cccd = DomId('CCCD');
    let diemToan = DomId('diemToan');
    let diemLy = DomId('diemLy');
    let diemHoa = DomId('diemHoa');

    // Check input value
    if (validate.checkEmpty(fullName) || validate.checkEmpty(maSo) || validate.checkEmpty(cccd) || !(validate.validPhone(phone) && validate.checkMSSV(maSo) && validate.validateEmail(email) && validate.checkMarks(diemToan) && validate.checkMarks(diemLy) && validate.checkMarks(diemHoa))) {
        return;
    }

    // Check MSSV
    for (let i = 0; i < listStu.list.length; i++) {
        if (maSo.value == listStu.list[i].mssv) {
            maSo.style.borderColor = 'red';
            return;
        }
    }

    // Add student
    var student = new Student(fullName.value, maSo.value, email.value, phone.value, cccd.value, diemToan.value, diemLy.value, diemHoa.value);
    student.calcAverage();
    student.calcRank();
    listStu.addStudent(student);

    // Display list of students
    displayList(listStu);
    setStorage();
    reset();
}

// function removeStudents() {
//     let listStudent = document.getElementsByClassName('checkboxMSSV');
//     let listChosen = [];
//     for (let i = 0; i < listStudent.length; i++) {
//         if (listStudent[i].checked) {
//             listChosen.push(listStudent[i].value);
//         }
//     }
//     listStu.removeStudents(listChosen);
//     displayList(listStu);
//     setStorage();
//     reset();
// }

// Get the button element
const searchStudentBtn = document.getElementById("searchStudentBtn");
// Add an event listener to the button
searchStudentBtn.addEventListener("click", searchStudent);
function searchStudent() {
    let key = document.getElementById('key').value;
    let listSearch = listStu.searchStudent(key);
    displayList(listSearch);
}

function removeStudent(mssv) {
    let student = listStu.searchStudentByMSSV(mssv);
    if (student != null) {
        listStu.removeStudent(student);
        displayList(listStu);
        setStorage();
        reset();
    }
    return;
}

function modifyInf(mssv) {
    let student = listStu.searchStudentByMSSV(mssv);
    if (student != null) {
        DomId('saveInfoBtn').style.display = 'inline';
        DomId('addStudentBtn').style.display = 'none';

        DomId('maSo').value = student.mssv;
        DomId('maSo').setAttribute('disabled', true);

        DomId('hoTen').value = student.name;
        DomId('email').value = student.email;
        DomId('phone').value = student.phone;
        DomId('CCCD').value = student.cccd;
        DomId('diemToan').value = student.diemToan;
        DomId('diemLy').value = student.diemLy;
        DomId('diemHoa').value = student.diemHoa;
    }
    return;
}

// Get the button element
const saveInfoBtn = document.getElementById("saveInfoBtn");
// Add an event listener to the button
saveInfoBtn.addEventListener("click", saveInfo);
function saveInfo() {
    // Input
    let fullName = DomId('hoTen');
    let maSo = DomId('maSo');
    let email = DomId('email');
    let phone = DomId('phone');
    let cccd = DomId('CCCD');
    let diemToan = DomId('diemToan');
    let diemLy = DomId('diemLy');
    let diemHoa = DomId('diemHoa');

    // Check input value
    if (validate.checkEmpty(fullName) || validate.checkEmpty(maSo) || validate.checkEmpty(cccd) || !(validate.validPhone(phone) && validate.checkMSSV(maSo) && validate.validateEmail(email) && validate.checkMarks(diemToan) && validate.checkMarks(diemLy) && validate.checkMarks(diemHoa))) {
        return;
    }

    // Create a new Student object
    let student = new Student(fullName.value, maSo.value, email.value, phone.value, cccd.value, diemToan.value, diemLy.value, diemHoa.value);
    student.calcAverage();
    student.calcRank();

    // Replace the old student and display the list of students
    listStu.modifyStudent(student);
    displayList(listStu);
    setStorage();
    reset();
}

function reset() {
    let fullName = DomId('hoTen');
    let maSo = DomId('maSo');
    let email = DomId('email');
    let phone = DomId('phone');
    let cccd = DomId('CCCD');
    let diemToan = DomId('diemToan');
    let diemLy = DomId('diemLy');
    let diemHoa = DomId('diemHoa');
    fullName.value = '';
    maSo.value = '';
    email.value = '';
    phone.value = '';
    cccd.value = '';
    diemToan.value = '';
    diemLy.value = '';
    diemHoa.value = '';
    fullName.style.border = 'var(--bs-border-width) solid var(--bs-border-color)';
    maSo.style.border = 'var(--bs-border-width) solid var(--bs-border-color)';
    email.style.border = 'var(--bs-border-width) solid var(--bs-border-color)';
    phone.style.border = 'var(--bs-border-width) solid var(--bs-border-color)';
    cccd.style.border = 'var(--bs-border-width) solid var(--bs-border-color)';
    diemToan.style.border = 'var(--bs-border-width) solid var(--bs-border-color)';
    diemLy.style.border = 'var(--bs-border-width) solid var(--bs-border-color)';
    diemHoa.style.border = 'var(--bs-border-width) solid var(--bs-border-color)';
    DomId('maSo').removeAttribute('disabled');
    DomId('saveInfoBtn').style.display = 'none';
    DomId('addStudentBtn').style.display = 'inline';
}

console.log(1);