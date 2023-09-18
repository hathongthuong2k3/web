export class ListOfAssignments {
    constructor(list = []) {
        this.list = list;
    }
    addAssignment(assignment) {
        this.list.push(assignment);
    }
    removeAssignment(key) {
        for(let i = 0; i < this.list.length; i++) {
            if(key == this.list[i].id) {
                this.list.splice(i, 1);
            }
        }
    }
}