module.exports = class UseCase {
    constructor({ tracer }) {
        this.tracer = tracer;
    }

    async execute() {
        const callName = 'UseCase.execute';
        console.log(`${callName} - trace id ${this.tracer.getId()}`);

        await this._sleep();
        
        console.log(`${callName} - trace id (after sleep) ${this.tracer.getId()}`);
    }

    _sleep() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }
}