module.exports = class Adapter {
    constructor({ tracer, usecase }) {
        this.tracer = tracer;
        this.useCase= usecase;
    }

    async process() {        
        await this.useCase.execute();
    }
}