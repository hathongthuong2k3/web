export class Validation {
    constructor() {

    }
    checkEmpty = function (input) {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            return true;
        }
        input.style.borderColor = 'green';
        return false;
    }
    checkMSSV = function (input) {
        var MSSV = /^[0-9]+$/;
        if (MSSV.test(input.value) && input.value.length > 0) {
            input.style.borderColor = 'green';
            return true;
        }
        input.style.borderColor = 'red';
        return false;
    }
    validateEmail = function (input) {
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(input.value.toLowerCase())) {
            input.style.borderColor = 'green';
            return true;
        }
        input.style.borderColor = 'red';
        return false;
    }
    validPhone = function (input) {
        var numbers = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (numbers.test(input.value)) {
            input.style.borderColor = 'green';
            return true;
        }
        input.style.borderColor = 'red';
        return false;
    }
    checkMarks = function (input) {
        var numbers = /^[0-9]+$/;
        if (numbers.test(input.value) && input.value >= 0 && input.value <= 10) {
            input.style.borderColor = 'green';
            return true;
        }
        input.style.borderColor = 'red';
        return false;
    }
}
