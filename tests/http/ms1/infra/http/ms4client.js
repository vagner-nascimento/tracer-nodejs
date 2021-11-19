const axios = require('axios');

module.exports = class Ms4Client {
    constructor({ tracer }) {
        this.tracer = tracer;
        this.axios = axios.create({ baseURL: "http://localhost:3003" });
    }

    async get() {
        const traceId = this.tracer.getId();
        const res = await this.axios.get('/', { headers: { 'x-trace-id': traceId }});

        return res.data;
    }
}