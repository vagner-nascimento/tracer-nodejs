module.exports = class Tracer {
    constructor() {
        this.id = null;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
}
