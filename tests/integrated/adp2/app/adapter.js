module.exports = class Adapter {
    constructor({ usecase }) {
        this.useCase= usecase;
    }

    async process(data) {
        await this.useCase.execute(data);
    }
}