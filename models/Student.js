import { ListOfCourses } from "./ListOfCourses.js";

export class Student {
    constructor(name = '', mssv = -1, email = '', phone = -1, cccd = -1, diemToan = -1, diemLy = -1, diemHoa = -1, average = -1, rank = '') {
        // Attributes
        this.name = name;
        this.mssv = mssv;
        this.email = email;
        this.phone = phone;
        this.cccd = cccd;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
        this.average = average;
        this.rank = rank;
        // this.listOfCourses = new ListOfCourses();
    }

    // Methods
    calcAverage() {
        this.average = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        this.average = Math.round(this.average * 100) / 100;
    }

    calcRank() {
        if (this.average <= 10 && this.average >= 8) {
            this.rank = "Xếp loại Giỏi";
        }
        else if (this.average < 8 && this.average >= 6.5) {
            this.rank = "Xếp loại Khá";
        }
        else if (this.average < 6.5 && this.average >= 5) {
            this.rank = "Xếp loại Trung Bình";
        }
        else {
            this.rank = "Xếp loại yếu";
        }
    }
}