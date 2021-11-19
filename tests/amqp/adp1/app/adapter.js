module.exports = class Adapter {
    constructor({ usecase }) {
        this.useCase= usecase;
    }

    async process() {      
        await this.useCase.execute();
    }
}