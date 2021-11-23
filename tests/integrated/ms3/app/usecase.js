module.exports = class UseCase {
    constructor({ tracer }) {
        this.tracer = tracer;
    }

    async execute() {
        const callName = 'UseCase.execute';
        console.log(`${callName} - trace id ${this.tracer.getId()}`);
    }
}