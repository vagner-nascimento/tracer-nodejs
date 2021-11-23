const amqpMiddleware = require('../../lib/amqpMiddleware');

module.exports = class Subsbriber {
    constructor({ broker, container }) {
        this.broker = broker;
        this.container = container;
    }

    async subscribe(queue, handler) {
        const channel = await this.broker.getChannel();
        await channel.assertQueue(queue);
        
        channel.consume(queue, async (msg) => {
            if(msg) {
                try {
                    // Middleware Simulation
                    msg.container = this.container.createScope();
                    msg.data = JSON.parse(msg.content.toString());
                    msg.next = async function() { return; }
                    // end of Middleware Simulation

                    await amqpMiddleware(msg);
                    await handler(msg);
                } catch(err) {
                    console.error('error on message consume', err);
                } finally {
                    channel.ack(msg);
                    console.log('message readed');
                }
            } else {
                console.log('no message', msg);
            }
        });

        console.log(`subscribed on ${queue}`);
    }
}