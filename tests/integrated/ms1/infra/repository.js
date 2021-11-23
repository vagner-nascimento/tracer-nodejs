module.exports = class Repository {
    constructor({ ms2client }) {
        this.ms2Client = ms2client;
    }

    async getData() {
        const data = await this.ms2Client.get();
        return data;
    }
}