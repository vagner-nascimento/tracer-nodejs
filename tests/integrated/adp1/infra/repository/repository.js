module.exports = class Repository {
    constructor({ publisher, ms1client }) {
        this.publisher = publisher;
        this.ms1client = ms1client;
    }

    async save(data) {
        await this.ms1client.get();
        
        await this.publisher.publish('data2', data);
    }
}