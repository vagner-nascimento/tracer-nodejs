const axios = require('axios');

module.exports = class Ms2Client {
    constructor({ tracer }) {
        this.tracer = tracer;
        this.axios = axios.create({ baseURL: "http://localhost:3001" });
    }

    async get() {
        const traceId = this.tracer.getId();
        const res = await this.axios.get('/', { headers: { 'x-trace-id': traceId }});

        return res.data;
    }
}