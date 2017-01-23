export default class {
    constructor(priority) {
        this.priority = priority;
    }

    getFirstPoint() {
        return this.priority[0];
    }
}