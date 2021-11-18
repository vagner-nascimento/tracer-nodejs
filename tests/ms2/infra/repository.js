module.exports = class Repository {
    constructor({ ms3client }) {
        this.ms3Client = ms3client;
    }

    async getData() {
        const data = await this.ms3Client.get();

        return data;
    }
}