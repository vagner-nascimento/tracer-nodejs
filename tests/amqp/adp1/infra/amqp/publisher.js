const { Buffer } = require("safe-buffer");

module.exports = class Publisher {
    constructor({ tracer, broker }) {
        this.tracer = tracer;
        this.broker = broker;
    }

    async publish(queue, data) {
        const channel = await this.broker.getChannel();
        await channel.assertQueue(queue);
        
        const dataToSend = { ...data, "x-trace-id": this.tracer.getId() };

        await channel.sendToQueue(queue, Buffer.from(JSON.stringify(dataToSend)));
    }
}