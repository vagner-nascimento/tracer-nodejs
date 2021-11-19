module.exports = class Repository {
    constructor({ ms2client, ms4client }) {
        this.ms2Client = ms2client;
        this.ms4Client = ms4client;
    }

    async getData() {
        const data2 = await this.ms2Client.get();
        const data4 = await this.ms4Client.get();

        return { data2, data4 };
    }
}