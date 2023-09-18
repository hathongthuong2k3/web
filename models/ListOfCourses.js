export class ListOfCourses {
    constructor(list = []) {
        this.list = list;
    }
    addCourse(course) {
        this.list.push(course);
    }
    removeCourse(key) {
        for (let i = 0; i < this.list.length; i++) {
            if (key == this.list[i].id) {
                this.list.splice(i, 1);
            }
        }
    }
}