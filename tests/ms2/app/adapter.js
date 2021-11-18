module.exports = class Adapter {
    constructor({ tracer, usecase }) {
        this.tracer = tracer;
        this.useCase= usecase;
    }

    async process() {
/*        const callName = 'Adapter.process';

        console.log(`${callName} - trace id ${this.tracer.getId()} `); */
        
        await this.useCase.execute();
    }
}