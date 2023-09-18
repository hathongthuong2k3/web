export class ListOfClasses {
    constructor() {
        this.list = [];
    }
    addClass(cls) {
        this.list.push(cls);
    }
    quickSortID(list) {
        if (list.length <= 1) {
            return list;
        } else {
            let pivot = list[0].id;
            let left = [];
            let right = [];
            for (let i = 1; i < list.length; i++) {
                if (list[i].id < pivot) {
                    left.push(list[i]);
                } else {
                    right.push(list[i]);
                }
            }
            return quickSortID(left).concat(pivot, quickSortID(right));
        }
    }
    sortID() {
        return this.quickSortID(this.list);
    }
}