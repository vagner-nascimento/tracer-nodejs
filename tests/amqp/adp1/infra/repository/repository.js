module.exports = class Repository {
    constructor({ publisher }) {
        this.publisher = publisher;
    }

    async save(data) {
        await this.publisher.publish('data2', data);
    }
}