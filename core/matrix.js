export default class {
    constructor() {
        this.length = 0;
        this.values = [];
    }

    set(index, value) {
        this.values[index] = value;
        ++this.length;
    }
}