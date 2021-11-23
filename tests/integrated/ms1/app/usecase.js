module.exports = class UseCase {
    constructor({ tracer, repository }) {
        this.tracer = tracer;
        this.repository = repository;
    }

    async execute() {
        const callName = 'UseCase.execute';
        console.log(`${callName} - trace id ${this.tracer.getId()}`);

        await this.repository.getData();
    }
}