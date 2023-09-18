export class ListOfStudents {
    constructor() {
        this.list = [];
    }
    addStudent(student) {
        this.list.push(student);
    }
    removeStudents(listMSSV) {
        for (var i = 0; i < listMSSV.length; i++) {
            for (var j = 0; j < this.list.length; j++) {
                var student = this.list[j];
                if (listMSSV[i] == student.mssv) {
                    this.list.splice(j, 1);
                }
            }
        }
    }
    removeStudentByMSSV(mssv) {
        for (let i = 0; i < this.list.length; i++) {
            if (mssv == this.list[i].mssv) {
                this.list.splice(i, 1);
                return;
            }
        }
    }
    removeStudent(student) {
        for (let i = 0; i < this.list.length; i++) {
            if (student.mssv == this.list[i].mssv) {
                this.list.splice(i, 1);
                return;
            }
        }
    }
    modifyStudent(student) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].mssv == student.mssv) {
                this.list[i] = student;
                return;
            }
        }
    }
    // searchStudent(key) {
    //     var listSearch = new ListOfStudents();
    //     for (var i = 0; i < this.list.length; i++) {
    //         var student = this.list[i];
    //         if (student.name.search(key) != -1) {
    //             listSearch.list.push(student);
    //             return;
    //         }
    //     }
    //     return listSearch;
    // }
    searchStudentByMSSV(mssv) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].mssv === mssv) {
                return this.list[i];
            }
        }
        return null;
    }
    quickSortName(list) {
        if (list.length <= 1) {
            return list;
        } else {
            let pivot = list[0].name;
            let left = [];
            let right = [];
            for (let i = 1; i < list.length; i++) {
                if (list[i].name < pivot) {
                    left.push(list[i]);
                } else {
                    right.push(list[i]);
                }
            }
            return quickSortName(left).concat(pivot, quickSortName(right));
        }
    }
    sortName() {
        return this.quickSort(this.list);
    }
    quickSortMSSV(list) {
        if (list.length <= 1) {
            return list;
        } else {
            let pivot = list[0].mssv;
            let left = [];
            let right = [];
            for (let i = 1; i < list.length; i++) {
                if (list[i].mssv < pivot) {
                    left.push(list[i]);
                } else {
                    right.push(list[i]);
                }
            }
            return quickSortMSSV(left).concat(pivot, quickSortMSSV(right));
        }
    }
    sortMSSV() {
        return this.sortMSSV(this.list);
    }
    quickSortAverage(list) {
        if (list.length <= 1) {
            return list;
        } else {
            let pivot = list[0].average;
            let left = [];
            let right = [];
            for (let i = 1; i < list.length; i++) {
                if (list[i].average < pivot) {
                    left.push(list[i]);
                } else {
                    right.push(list[i]);
                }
            }
            return quickSortAverage(left).concat(pivot, quickSortAverage(right));
        }
    }
    sortAverage() {
        return this.quickSortAverage(this.list);
    }
    quickSortMaths(list) {
        if (list.length <= 1) {
            return list;
        } else {
            let pivot = list[0].diemToan;
            let left = [];
            let right = [];
            for (let i = 1; i < list.length; i++) {
                if (list[i].diemToan < pivot) {
                    left.push(list[i]);
                } else {
                    right.push(list[i]);
                }
            }
            return quickSortMaths(left).concat(pivot, quickSortMaths(right));
        }
    }
    sortMaths() {
        return this.quickSortMaths(this.list);
    }
    quickSortPhys(list) {
        if (list.length <= 1) {
            return list;
        } else {
            let pivot = list[0].diemLy;
            let left = [];
            let right = [];
            for (let i = 1; i < list.length; i++) {
                if (list[i].diemLy < pivot) {
                    left.push(list[i]);
                } else {
                    right.push(list[i]);
                }
            }
            return quickSortPhys(left).concat(pivot, quickSortPhys(right));
        }
    }
    sortPhys() {
        return this.quickSortPhys(this.list);
    }
    quickSortChe(list) {
        if (list.length <= 1) {
            return list;
        } else {
            let pivot = list[0].diemHoa;
            let left = [];
            let right = [];
            for (let i = 1; i < list.length; i++) {
                if (list[i].diemHoa < pivot) {
                    left.push(list[i]);
                } else {
                    right.push(list[i]);
                }
            }
            return quickSortChe(left).concat(pivot, quickSortChe(right));
        }
    }
    sortChe() {
        return this.quickSortChe(this.list);
    }
}
