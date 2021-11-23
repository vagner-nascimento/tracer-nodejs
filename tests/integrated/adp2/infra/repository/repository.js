module.exports = class Repository {
    constructor({ publisher, ms3client }) {
        this.publisher = publisher;
        this.ms3client = ms3client;
    }

    async save(data) {
        await this.publisher.publish('data3', data);
        await this.ms3client.get();
    }
}